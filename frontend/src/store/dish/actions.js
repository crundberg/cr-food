import * as TYPE from './types';
import apiRequest from '../apiRequest';

function loading() {
	return {
		type: TYPE.LOADING,
	};
}

function get(items) {
	return {
		type: TYPE.GET,
		payload: items,
	};
}

function add(item, redirectTo) {
	return {
		type: TYPE.ADD,
		payload: {
			item,
			redirectTo,
		},
	};
}

function remove(item, redirectTo) {
	return {
		type: TYPE.DELETE,
		payload: {
			item,
			redirectTo,
		},
	};
}

function error(e) {
	return {
		type: TYPE.ERROR,
		payload: e,
	};
}

export function handleGet() {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const { data } = await apiRequest('/api/dish', 'GET', {}, {});
			dispatch(get(data));
		} catch (e) {
			dispatch(error(e.response.data));
		}
	};
}

export function handleAdd(item) {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const { data } = await apiRequest('/api/dish', 'post', {}, item);
			dispatch(add(data, '/'));
		} catch (e) {
			dispatch(error(e.response.data));
		}
	};
}

export function handleRemove(id) {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const result = await apiRequest(`/api/dish/${id}`, 'delete');
			dispatch(remove(result, '/'));
		} catch (e) {
			dispatch(error(e.response.data));
		}
	};
}
