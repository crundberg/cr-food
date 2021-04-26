import * as AUTH from './types';

export const initialState = {
	error: '',
	isLoading: false,
	user: {
		username: '',
		name: '',
	},
	redirectTo: '',
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case AUTH.LOADING:
			return {
				...state,
				isLoading: true,
				error: '',
				redirectTo: '',
			};
		case AUTH.ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case AUTH.LOGIN:
			return {
				...state,
				isLoading: false,
				user: action.payload.user,
				redirectTo: action.payload.redirectTo,
			};
		case AUTH.LOGOUT:
			return {
				...state,
				isLoading: false,
				user: initialState.user,
				redirectTo: '/auth',
			};
		default: {
			return state;
		}
	}
}
