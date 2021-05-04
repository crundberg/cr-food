import * as TYPE from './types';

export const initialState = {
	error: '',
	items: [],
	details: {
		name: '',
	},
	isLoading: false,
	isSucceeded: false,
	redirectTo: '',
};

export default (state = initialState, action) => {
	let index = 0;

	if (action.type === TYPE.EDIT) {
		index = state.items.findIndex((item) => item.id === action.payload.item.id);
	}

	switch (action.type) {
		case TYPE.LOADING:
			return {
				...state,
				isLoading: true,
				isSucceeded: false,
				details: initialState.details,
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
		case TYPE.GETBYID:
			return {
				...state,
				isLoading: false,
				details: action.payload,
			};
		case TYPE.ADD:
			return {
				...state,
				items: [action.payload.item, ...state.items],
				isLoading: false,
				redirectTo: action.payload.redirectTo,
			};
		case TYPE.EDIT:
			return {
				...state,
				items: [
					...state.items.slice(0, index),
					action.payload.item,
					...state.items.slice(index + 1),
				],
				isLoading: false,
				isSucceeded: true,
				redirectTo: action.payload.redirectTo,
			};
		case TYPE.DELETE:
			return {
				...state,
				items: [
					...state.items.filter((item) => item.id !== action.payload.item.id),
				],
				isLoading: false,
				redirectTo: action.payload.redirectTo,
			};
		default: {
			return state;
		}
	}
};
