import * as TYPE from './types';

export const initialState = {
	error: '',
	items: [],
	isLoading: false,
	redirectTo: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TYPE.LOADING:
			return {
				...state,
				isLoading: true,
				error: '',
				redirectTo: '',
			};
		case TYPE.ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case TYPE.GET:
			return {
				...state,
				isLoading: false,
				items: action.payload,
			};
		case TYPE.ADD:
			return {
				...state,
				items: [action.payload.item, ...state.items],
				redirectTo: action.payload.redirectTo,
			};
		case TYPE.DELETE:
			return {
				...state,
				items: [
					...state.items.filter((item) => item.id !== action.payload.item.id),
				],
				redirectTo: action.payload.redirectTo,
			};
		default: {
			return state;
		}
	}
};
