export default function bindActions(actions, dispatch) {
	const bindAction = (action, dispatch2) => (...args) =>
		dispatch2(action(...args));

	// if it's a single action
	if (typeof actions === 'function') {
		return bindAction(actions, dispatch);
	}
	if (typeof actions !== 'object' || actions === null) {
		throw new Error(
			`bindActions expected an object or a function, instead received ${
				actions === null ? 'null' : typeof actions
			}. `
		);
	}

	const boundActions = Object.entries(actions)
		.filter(([, action]) => typeof action === 'function')
		.reduce((acc, [key, action]) => {
			acc[key] = bindAction(action, dispatch);
			return acc;
		}, {});

	return boundActions;
}
