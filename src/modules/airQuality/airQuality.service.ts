import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { getRepository, Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

import { AirQuality } from './entities/airQuality.entity';
import { CreateAirQualityDto } from './dto/create-airQuality.dto';
import { GetAirQualityDto } from './dto/get-airQuality.dto';
import IqAirIntegration from '../../common/externalIntegration/iqAir';

dayjs.extend(localizedFormat);

@Injectable()
export class AirQualityService {
	constructor(
		@InjectRepository(AirQuality)
		private airQualityRepository: Repository<AirQuality>,
	) {}

	@Cron(CronExpression.EVERY_30_SECONDS)
	async handleCron() {
		console.log('Cron job running');
		const iqAir = new IqAirIntegration();
		const parisCoordinates = {
			lat: +process.env.PARIS_LAT || 48.856613,
			lon: +process.env.PARIS_LON || 2.352222,
		};

		const iqAirQualityResponse = await iqAir.getNearestLocationAirQuality(parisCoordinates);

		if (iqAirQualityResponse) {
			const {
				data: {
					city,
					country,
					current: { pollution, weather },
					location,
					state,
				},
			} = iqAirQualityResponse;

			const airQualityEntityCreationData = {
				city,
				country,
				location,
				pollution,
				state,
				weather,
			};

			await this.create(airQualityEntityCreationData);
		}
	}

	async create(airQualityDto: CreateAirQualityDto) {
		return await this.airQualityRepository.save(airQualityDto);
	}

	async getIqAirQuality(getAirQualityDto: GetAirQualityDto) {
		const iqAir = new IqAirIntegration();

		const iqAirQualityResponse = await iqAir.getNearestLocationAirQuality(getAirQualityDto);

		if (iqAirQualityResponse) {
			const {
				data: {
					current: { pollution },
				},
			} = iqAirQualityResponse;

			return {
				result: {
					pollution,
				},
			};
		}

		return  {
			result: {
				pollution: {},
			},
		};
	}

	async getMostPollutedTimeFrame() {
		const oldestMostPollutedAirQualityInParis = await getRepository(AirQuality)
			.createQueryBuilder('airQuality')
			.orderBy("pollution->>'aqius'", 'DESC')
			.addOrderBy("pollution->>'aqicn'", 'DESC')
			.addOrderBy('"createdAt"', 'ASC')
			.getOne();

		if (oldestMostPollutedAirQualityInParis) {
			const {
				id,
				pollution: { ts },
			} = oldestMostPollutedAirQualityInParis;

			return { dateAndTime: dayjs(ts).format('lll'), id };
		}

		return {
			dateAndTime: '',
			id: '',
		};
	}
}
