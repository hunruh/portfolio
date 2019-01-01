import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Headshot = () => (
	<StaticQuery
		query={graphql`
			query {
				headshotImage: file(relativePath: { eq: "headshot.png" }) {
					childImageSharp {
						fluid(maxWidth: 250) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => (
			<Img fluid={data.headshotImage.childImageSharp.fluid} />
		)}
	/>
);

export default Headshot;
