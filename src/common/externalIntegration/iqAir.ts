import { InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { GetNearestLocationAirQuality, IqairResponse, MakeRequest, Method } from '../types';
import { generateUrl } from '../utils';

class IqAirIntegration {
	private axiosInstance: AxiosInstance;

	constructor() {
		// Axios Instance
		this.axiosInstance = axios.create({
			baseURL: process.env.IQAIR_BASE_URL || '',
		});
	}

	private async makeAuthenticatedRequest(request: MakeRequest): Promise<any> {
		const iqairApiKey = process.env.IQAIR_API_KEY || '';
		const { url } = request;

		try {
			const response: AxiosResponse = await this.axiosInstance({
				...request,
				url: `${url}&key=${iqairApiKey}`,
			});

			return response.data;
		} catch (error) {
			if (error instanceof Error) {
				console.log('error', error.message);
				throw new InternalServerErrorException('Error pinging iqAir for air quality');
			}
		}
	}

	public async getNearestLocationAirQuality({
		lat,
		lon,
	}: GetNearestLocationAirQuality): Promise<IqairResponse | void> {
		const url = generateUrl({
			url: '/nearest_city',
			query: {
				lat,
				lon,
			},
		});

		const request = {
			method: Method.GET,
			url,
		};

		try {
			return await this.makeAuthenticatedRequest(request);
		} catch (error) {
			if (error instanceof Error) {
				console.log('error', error.message);
				throw new InternalServerErrorException(
					`Error pinging iqAir for air quality for nearest location with coordinates ${lat} lat, ${lon} lon`,
				);
			}
		}
	}
}

export default IqAirIntegration;
