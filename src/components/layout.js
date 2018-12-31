import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../styles/core.scss';
import styles from '../styles/layout.module.scss';

const Layout = ({ pageTitle, children }) => (
	<>
		<Header pageTitle={pageTitle} />
		<div className={`container ${styles.contentWrapper}`}>{children}</div>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string.isRequired
};

export default Layout;
