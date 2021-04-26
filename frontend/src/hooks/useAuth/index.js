import { useGlobalStore } from 'store';
import bindActions from 'store/bindActions';
import authReducer from 'store/auth';

const { actions } = authReducer;

const useAuth = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { user, error, isLoading, redirectTo } = state.auth;

	// List of Actions
	const { handleLogin, handleLogout } = actions;

	// Bind Actions
	const boundActions = bindActions(
		{
			handleLogin,
			handleLogout,
		},
		dispatch
	);

	return {
		user,
		error,
		isLoading,
		redirectTo,
		...boundActions,
	};
};

export default useAuth;
