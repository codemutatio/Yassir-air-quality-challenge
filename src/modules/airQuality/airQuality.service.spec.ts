import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { AirQuality } from './entities/airQuality.entity';
import { AirQualityService } from './airQuality.service';
import {mockedAirQualityRepository} from './__mocks__/airQuality.mocks';

describe('AirQualityService', () => {
	let service: AirQualityService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AirQualityService,
				{
					provide: getRepositoryToken(AirQuality),
					useValue: mockedAirQualityRepository,
				},
			],
		}).compile();

		service = module.get<AirQualityService>(AirQualityService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

});
