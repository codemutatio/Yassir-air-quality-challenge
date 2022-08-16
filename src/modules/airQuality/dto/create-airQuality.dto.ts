import { IsDefined, ValidateNested, IsNotEmptyObject, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { LocationType } from '../../../common/types';

class Location {
	type: LocationType;
	coordinates: [number, number];
}

class Pollution {
	ts: Date;
	aqius: number;
	mainus: string;
	aqicn: number;
	maincn: string;
}

class Weather {
	ts: Date;
	tp: number;
	pr: number;
	hu: number;
	ws: number;
	wd: number;
	ic: string;
}

export class CreateAirQualityDto {
	@IsDefined()
	city: string;

	@IsDefined()
	country: string;

	@Type(() => Location)
	@ValidateNested()
	@IsDefined()
	@IsNotEmptyObject()
	@IsObject()
	location: Location;

	@Type(() => Pollution)
	@ValidateNested()
	@IsDefined()
	@IsNotEmptyObject()
	@IsObject()
	pollution: Pollution;

	@IsDefined()
	state: string;

	@Type(() => Weather)
	@ValidateNested()
	@IsDefined()
	@IsNotEmptyObject()
	@IsObject()
	weather: Weather;
}
