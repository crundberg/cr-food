import { useGlobalStore } from 'store';
import bindActions from 'store/bindActions';
import reducer from 'store/dish';

const { actions } = reducer;

const useDish = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { items, error, isLoading } = state.dish;

	// List of Actions
	const { handleGet, handleAdd, handleTrigger } = actions;

	// Bind Actions
	const boundActions = bindActions(
		{
			handleGet,
			handleAdd,
			handleTrigger,
		},
		dispatch
	);

	return { items, error, isLoading, ...boundActions };
};

export default useDish;
