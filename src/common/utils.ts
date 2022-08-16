import { GenerateUrl } from './types';

export const generateUrl: (urlDetails: GenerateUrl) => string = urlDetails => {
	let { url } = urlDetails;
	const { query } = urlDetails;
	let paramCount = 0;

	Object.entries(query).forEach(entry => {
		const [key, value] = entry;

		if (value !== undefined) {
			url += `${paramCount === 0 ? '?' : '&'}${key}=${value}`;
			paramCount += 1;
		}
	});

	return url;
};
