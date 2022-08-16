export enum LocationType {
	Point = 'Point',
}

export type Location = {
	type: LocationType;
	coordinates: [number, number];
};

export type Pollution = {
	ts: Date;
	aqius: number;
	mainus: string;
	aqicn: number;
	maincn: string;
};

export type Weather = {
	ts: Date;
	tp: number;
	pr: number;
	hu: number;
	ws: number;
	wd: number;
	ic: string;
};

export type GenerateUrl = {
	query: Record<string, unknown>;
	url: string;
};

export enum Method {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
}

export type MakeRequest = {
	method: Method;
	url: string;
	data?: any;
};

export type GetNearestLocationAirQuality = {
	lat: number;
	lon: number;
};

export type Current = {
	pollution: Pollution;
	weather: Weather;
};

export type Data = {
	city: string;
	state: string;
	country: string;
	location: Location;
	current: Current;
};

export type IqairResponse = {
	status: string;
	data: Data;
};
