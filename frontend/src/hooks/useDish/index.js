import { useGlobalStore } from 'store';
import bindActions from 'store/bindActions';
import reducer from 'store/dish';

const { actions } = reducer;

const useDish = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { items, error, details, isLoading, redirectTo } = state.dish;

	// List of Actions
	const {
		handleGet,
		handleGetById,
		handleAdd,
		handleEdit,
		handleRemove,
	} = actions;

	// Bind Actions
	const boundActions = bindActions(
		{
			handleGet,
			handleGetById,
			handleAdd,
			handleEdit,
			handleRemove,
		},
		dispatch
	);

	return { items, error, details, isLoading, redirectTo, ...boundActions };
};

export default useDish;
