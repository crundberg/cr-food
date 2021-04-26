import axios from 'axios';

export default async function apiRequest(url, method, params, data) {
	const response = await axios({
		baseURL: process.env.REACT_APP_BASE_URL,
		url,
		method,
		params,
		data,
		withCredentials: true,
	});

	if (response.data.error) {
		console.error('Error from API', response.data.error);
		throw new Error(response.data.error);
	}

	return response.data;
}
