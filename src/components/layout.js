import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import '../styles/core.scss';
import styles from '../styles/layout.module.scss';

const Layout = ({ pageTitle, location, includeIconsFooter, children }) => (
	<>
		<Header pageTitle={pageTitle} location={location} />
		<div className={`container ${styles.contentWrapper}`}>{children}</div>
		<div className={`container ${styles.footer}`}>
			<div className="row">
				<div className="col text-left">&copy; 2019 Harrison Unruh</div>
				{includeIconsFooter && (
					<div className="col text-right">
						Icons by <a href="http://icons8.com">Icons8</a>
					</div>
				)}
			</div>
		</div>
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string.isRequired,
	includeIconsFooter: PropTypes.bool
};

Layout.defaultProps = {
	includeIconsFooter: false
};

export default Layout;
