import * as AUTH from './types';
import apiRequest from '../apiRequest';

function loading() {
	return {
		type: AUTH.LOADING,
	};
}

function login(user, redirectTo) {
	return {
		type: AUTH.LOGIN,
		payload: {
			user,
			redirectTo,
		},
	};
}

function logout() {
	return {
		type: AUTH.LOGOUT,
		payload: {},
	};
}

function error(err) {
	return {
		type: AUTH.ERROR,
		payload: err,
	};
}

export function handleLogin(username, password, redirectTo) {
	return async (dispatch) => {
		dispatch(loading());

		try {
			const result = await apiRequest(
				'/api/login',
				'post',
				{},
				{ username, password }
			);

			if (result.success) {
				dispatch(login(result.user, redirectTo));
			} else {
				dispatch(error(result));
			}
		} catch (e) {
			dispatch(error(e.response.data));
		}
	};
}

export function handleLogout() {
	return async (dispatch) => {
		dispatch(loading());

		try {
			await apiRequest('/api/logout', 'get', {}, {});
			dispatch(logout());
		} catch (e) {
			dispatch(error(e.response.data));
		}
	};
}
