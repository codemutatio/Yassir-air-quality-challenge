import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { AirQuality } from './entities/airQuality.entity';

@Injectable()
@EntityRepository(AirQuality)
export class AirQualityRepository extends Repository<AirQuality> {
	async findMostPolluted() {
		try {
			const airQuality = await (AirQuality)
				.createQueryBuilder('airQuality')
				.orderBy('airQuality.pollution.aqius', 'DESC')
				.addOrderBy('airQuality.pollution.aqicn', 'DESC')
				.getOne();

			return airQuality;
		} catch (error) {
			console.log('error', error.message);
			throw new InternalServerErrorException('Error getting air quality');
		}
	}
}
