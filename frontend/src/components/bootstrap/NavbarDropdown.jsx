import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function NavbarDropdown({ name, children }) {
	const [isVisible, setVisible] = useState(false);
	const node = useRef();

	const handleToggle = (e) => {
		e.preventDefault();
		setVisible((visible) => !visible);
	};
	const handleClick = (e) => {
		if (!node.current.contains(e.target)) setVisible(false);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	const linkClassName = `nav-link dropdown-toggle ${isVisible && 'show'}`;
	const dropdownClassName = `dropdown-menu ${isVisible && 'show'}`;

	return (
		<li className="nav-item dropdown" ref={node}>
			<a className={linkClassName} href="/" onClick={handleToggle}>
				{name}
			</a>
			<ul className={dropdownClassName}>{children}</ul>
		</li>
	);
}

NavbarDropdown.propTypes = {
	name: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default NavbarDropdown;
