import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SkillGroup from '../components/about/skillgroup';
import Stat from '../components/about/stat';
import Layout from '../components/layout';
import SEO from '../components/seo';

import animations from '../styles/animations.module.scss';
import styles from '../styles/about.module.scss';

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animationCounter: 0,
		};

		this.maxAnimationSteps = 7;
	}

	componentDidMount() {
		this.animationUpdater = setInterval(
			() => this.advanceAnimationStep(),
			150
		);
	}

	advanceAnimationStep() {
		const currentAnimationStep = this.state.animationCounter;
		this.setState({ animationCounter: currentAnimationStep + 1 });
		if (currentAnimationStep === this.maxAnimationSteps) {
			clearInterval(this.animationUpdater);
		}
	}

	render() {
		return (
			<Layout pageTitle='About' location={this.props.location}>
				<SEO title='About' keywords={[`gatsby`, `application`, `react`]} />
				<h2>Who I Am</h2>
				<p className={this.state.animationCounter >= 0 ? animations.slideEnter : styles.hidden}>
					<b>
						I'm a student and software engineer with a strong interest in
						user experience and visual design.
					</b>
					&nbsp;I love minimalist design and software that impacts users. When
					I'm not working on a project, I help lead Cornell's first
					interdisciplinary design organization, compete for the university's
					varsity lightweight rowing team, and play in the occasional chess
					tournament.
				</p>

				<h2 className={styles.sectionHead}>Skills</h2>
				<div className={this.state.animationCounter >= 1 ? animations.slideEnter : styles.hidden}>
					<SkillGroup points={Math.min(3, this.state.animationCounter - 2)}
						maxPoints={3} title='Expert'>
						Java, Python, HTML, CSS, Sass, Javascript, React.js, Unix
					</SkillGroup>
					<SkillGroup points={Math.min(2, this.state.animationCounter - 5)}
						maxPoints={3} title='Proficient'>
						C, OCaml, Bootstrap, D3.js, Sketch, Adobe Photoshop, Adobe
						Illustrator
					</SkillGroup>
					<SkillGroup points={Math.min(1, this.state.animationCounter - 7)}
						maxPoints={3} title='Familiar'>
						Numpy, SciPy, Anaconda Data Toolkit
					</SkillGroup>
				</div>

				<h2 className={styles.sectionHead}>Lifetime Stats</h2>
				<StaticQuery
					query={graphql`
						query {
							chessImage: file(relativePath: { eq: "knight_icon.png" }) {
								childImageSharp {
									fluid(maxWidth: 40) {
										...GatsbyImageSharpFluid
									}
								}
							}
							skiImage: file(relativePath: { eq: "ski_icon.png" }) {
								childImageSharp {
									fluid(maxWidth: 40) {
										...GatsbyImageSharpFluid
									}
								}
							}
							parkImage: file(relativePath: { eq: "park_icon.png" }) {
								childImageSharp {
									fluid(maxWidth: 40) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					`}
					render={data => (
						<div className={this.state.animationCounter >= 2 ? animations.slideEnter : styles.hidden}>
							<Stat
								label='Chess Tournaments Played'
								value={73}
								image={
									<Img
										fluid={data.chessImage.childImageSharp.fluid}
									/>
								}
								countDelay={.3}
							/>
							<Stat
								label='Mountains Skied'
								value={20}
								image={
									<Img fluid={data.skiImage.childImageSharp.fluid} />
								}
								countDelay={.3}
							/>
							<Stat
								label='National Parks Visited'
								value={24}
								image={
									<Img fluid={data.parkImage.childImageSharp.fluid} />
								}
								countDelay={.3}
							/>
						</div>
					)}
				/>
			</Layout>
		);
	}
}

export default AboutPage;
