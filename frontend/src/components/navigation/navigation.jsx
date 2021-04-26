import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavbarItem } from 'components/bootstrap';
import { AuthNavBar } from 'components/auth';

function Navigation() {
	const { pathname, hash } = useLocation();
	const [isVisible, setVisible] = useState(false);

	const handleToggle = (e) => {
		e.preventDefault();
		setVisible((visible) => !visible);
	};

	useEffect(() => {
		setVisible(false);
	}, [pathname, hash]);

	const collapseClassName = `collapse navbar-collapse ${isVisible && 'show'}`;

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<div className="container-md">
				<NavLink to="/" className="navbar-brand">
					CR Food
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					aria-controls="navbarPrimary"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={handleToggle}
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className={collapseClassName} id="navbarPrimary">
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<NavbarItem name="Food" to="/" />
						<AuthNavBar />
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
