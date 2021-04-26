import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavbarDropdownItem({ name, to }) {
	return (
		<li>
			<NavLink to={to} className="dropdown-item" activeClassName="active">
				{name}
			</NavLink>
		</li>
	);
}

NavbarDropdownItem.propTypes = {
	name: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default NavbarDropdownItem;
