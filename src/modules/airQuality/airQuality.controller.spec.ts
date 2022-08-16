import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AirQuality } from './entities/airQuality.entity';
import { AirQualityController } from './airQuality.controller';
import { AirQualityService } from './airQuality.service';

describe('AirQualityController', () => {
	let controller: AirQualityController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AirQualityController],
			providers: [
				AirQualityService,
				{
					provide: getRepositoryToken(AirQuality),
					useValue: {},
				},
			],
		}).compile();

		controller = module.get<AirQualityController>(AirQualityController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
