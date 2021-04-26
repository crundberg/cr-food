import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'hooks';

function AuthLogout() {
	const { redirectTo, handleLogout } = useAuth();

	useEffect(() => {
		handleLogout();
	}, []);

	if (redirectTo) {
		return <Redirect to={redirectTo} />;
	}

	return false;
}

export default AuthLogout;
