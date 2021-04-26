import authReducer from './auth';
import dishReducer from './dish';
import { logger } from './middlewares';

export const initialState = {
	auth: authReducer.initialState,
	dish: dishReducer.initialState,
};

export default function mainReducer(state, action) {
	// Receiving previous state here
	const { auth, dish } = state;

	// Receiving current state here
	const currentState = {
		auth: authReducer.reducer(auth, action),
		dish: dishReducer.reducer(dish, action),
	};

	// Middlewares
	logger(action, state, currentState);

	return currentState;
}
