import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../styles/core.scss';
import styles from '../styles/layout.module.scss';

const Layout = ({ pageTitle, location, children }) => (
	<>
		<Header pageTitle={pageTitle} location={location} />
		<div className={`container ${styles.contentWrapper}`}>{children}</div>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string.isRequired
};

export default Layout;
