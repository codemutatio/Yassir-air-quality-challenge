import { Column, Entity } from 'typeorm';

import { BaseModel } from '../../../common/base/model';
import { TABLES } from '../../../common/constants';
import { Location, Pollution, Weather } from '../../../common/types';

@Entity(TABLES.airQuality)
export class AirQuality extends BaseModel {
	@Column({ type: 'text' })
	city!: string;

	@Column({ type: 'text' })
	country!: string;

	@Column({ type: 'jsonb' })
	location!: Location;

	@Column({ type: 'jsonb' })
	pollution!: Pollution;

	@Column({ type: 'text' })
	state!: string;

	@Column({ type: 'jsonb' })
	weather!: Weather;
}
