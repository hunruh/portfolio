import React from 'react';

import NavMenu from '../components/navmenu';
import SEO from '../components/seo';

import '../styles/core.scss';

const IndexPage = () => (
	<>
		<SEO title="Welcome" />
		<NavMenu location={{ pathname: '/' }} />
	</>
);

export default IndexPage;
