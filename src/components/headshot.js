import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from '../styles/headshot.module.scss';

class Headshot extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			headshotHover: false
		};
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						headshotImage: file(
							relativePath: { eq: "headshot.png" }
						) {
							childImageSharp {
								fluid(maxWidth: 250) {
									...GatsbyImageSharpFluid
								}
							}
						}
						headshotImageHover: file(
							relativePath: { eq: "headshot2.png" }
						) {
							childImageSharp {
								fluid(maxWidth: 250) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				`}
				render={data => (
					<div
						onMouseEnter={() =>
							this.setState({ headshotHover: true })
						}
						onMouseLeave={() =>
							this.setState({ headshotHover: false })
						}>
						<Img fluid={data.headshotImage.childImageSharp.fluid} />
						<Img
							className={`${styles.hoverImage} ${
								this.state.headshotHover ? '' : styles.hidden
							}`}
							fluid={
								data.headshotImageHover.childImageSharp.fluid
							}
						/>
					</div>
				)}
			/>
		);
	}
}

export default Headshot;
