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

function getById(item) {
	return {
		type: TYPE.GETBYID,
		payload: item,
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

function edit(item, redirectTo) {
	return {
		type: TYPE.EDIT,
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
			dispatch(error(e.message));
		}
	};
}

export function handleGetById(id) {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const { data } = await apiRequest(`/api/dish/${id}`, 'GET', {}, {});
			dispatch(getById(data));
		} catch (e) {
			dispatch(error(e.message));
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
			dispatch(error(e.message));
		}
	};
}

export function handleEdit(id, item) {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const { data } = await apiRequest(`/api/dish/${id}`, 'put', {}, item);
			dispatch(edit(data, '/'));
		} catch (e) {
			dispatch(error(e.message));
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
			dispatch(error(e.message));
		}
	};
}
