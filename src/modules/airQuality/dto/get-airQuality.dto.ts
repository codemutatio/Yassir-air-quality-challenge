import { IsDefined, IsLatitude, IsLongitude } from 'class-validator';

export class GetAirQualityDto {
	@IsDefined()
	@IsLatitude()
	lat: number;

	@IsDefined()
	@IsLongitude()
	lon: number;
}
