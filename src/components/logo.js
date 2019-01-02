import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => (
	<StaticQuery
		query={graphql`
			query {
				logoImage: file(relativePath: { eq: "logo.png" }) {
					childImageSharp {
						fluid(maxWidth: 250) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => (
			<Link to={'/'}>
				<Img fluid={data.logoImage.childImageSharp.fluid} />
			</Link>
		)}
	/>
);

export default Logo;
