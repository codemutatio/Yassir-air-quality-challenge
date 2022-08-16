import { Controller, Get, Param, Query } from '@nestjs/common';
import { AirQualityService } from './airQuality.service';
import { GetAirQualityDto } from './dto/get-airQuality.dto';

@Controller('airQuality')
export class AirQualityController {
	constructor(private readonly airQualityService: AirQualityService) {}

	@Get()
	getAirQuality(@Query() query: GetAirQualityDto) {
		const { lat, lon } = query;
		return this.airQualityService.getIqAirQuality({ lat: +lat, lon: +lon });
	}

	@Get('/mostPolluted')
	getMostPollutedAirQuality() {
		return this.airQualityService.getMostPollutedTimeFrame();
	}

}
