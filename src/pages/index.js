import React from 'react';

import NavMenu from '../components/navmenu';
import SEO from '../components/seo';

const IndexPage = () => (
    <>
        <SEO title="Welcome" />
        <NavMenu location={{ pathname: '/' }} />
    </>
);

export default IndexPage;
