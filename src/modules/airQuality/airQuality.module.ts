import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AirQualityService } from './airQuality.service';
import { AirQualityController } from './airQuality.controller';
import { AirQuality } from './entities/airQuality.entity';
// import { AirQualityRepository } from './repository';

@Module({
	imports: [TypeOrmModule.forFeature([AirQuality]), ScheduleModule.forRoot()],
	controllers: [AirQualityController],
	providers: [AirQualityService],
	exports: [AirQualityService],
})
export class AirQualityModule {}
