import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavbarItem({ name, to }) {
	return (
		<li className="nav-item">
			<NavLink to={to} className="nav-link" activeClassName="active">
				{name}
			</NavLink>
		</li>
	);
}

NavbarItem.propTypes = {
	name: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default NavbarItem;
