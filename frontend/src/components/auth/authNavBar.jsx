import React from 'react';
import { useAuth } from 'hooks';
import { NavbarItem } from 'components/bootstrap';

function AuthNavBar() {
	const { user } = useAuth();

	const isLoggedIn = user.username;
	const name = isLoggedIn ? 'Logout' : 'Login';
	const to = isLoggedIn ? '/auth/logout' : '/auth';

	return <NavbarItem name={name} to={to} />;
}

export default AuthNavBar;
