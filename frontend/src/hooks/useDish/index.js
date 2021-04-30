import { useGlobalStore } from 'store';
import bindActions from 'store/bindActions';
import reducer from 'store/dish';

const { actions } = reducer;

const useDish = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { items, error, isLoading, redirectTo } = state.dish;

	// List of Actions
	const { handleGet, handleAdd, handleRemove } = actions;

	// Bind Actions
	const boundActions = bindActions(
		{
			handleGet,
			handleAdd,
			handleRemove,
		},
		dispatch
	);

	return { items, error, isLoading, redirectTo, ...boundActions };
};

export default useDish;
