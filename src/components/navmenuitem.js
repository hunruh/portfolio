import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from '../styles/navmenuitem.module.scss';

const NavMenuItem = ({
	className,
	title,
	description,
	to,
	currentLocation,
	locationMatchAction
}) => (
	<Link
		to={to}
		className={`${styles.navMenuItem} ${className}`}
		onClick={to === currentLocation.pathname ? locationMatchAction : null}>
		<div className="container">
			<div className={styles.navContent}>
				<h1 className={styles.pageTitle}>{title}</h1>
				<p className={styles.pageDescription}>{description}</p>
			</div>
		</div>
	</Link>
);

NavMenuItem.propTypes = {
	className: PropTypes.string,
	description: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	currentLocation: PropTypes.object.isRequired,
	locationMatchAction: PropTypes.func.isRequired
};

export default NavMenuItem;
