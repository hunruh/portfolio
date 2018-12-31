import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ProjectDetails from '../components/projects/projectdetails';
import ProjectTile from '../components/projects/projecttile';
import Layout from '../components/layout';
import SEO from '../components/seo';

class ProjectsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animationCounter: 0,
			selectedProject: ''
		};

		this.projects = {
			trino: "trino",
		}

		this.maxAnimationSteps = this.projects.length;
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

	exitProjectDetails() {
		this.setState({ selectedProject: '' });
	}

	renderProjectsView(data) {
		switch (this.state.selectedProject) {
			case 'trino':
				return (
					<ProjectDetails
						title='Trino'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'
						type='Puzzle Game'
						technologies='Java, LibGDX'
						link='http://trinothegame.com'
						github='http://trinothegame.com'
						images={data.trinoImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			default:
				return (
					<div>
						<ProjectTile
							projectTitle='Trino'
							projectType='Puzzle Game'
							thumbnailSizes={
								data.trinoImages.edges[0].node.childImageSharp
									.sizes
							}
							onClick={() =>
								this.setState({ selectedProject: 'trino' })
							}
							shouldEnter={this.state.animationCounter >= 0}
						/>
					</div>
				);
		}
	}

	render() {
		return (
			<Layout pageTitle='Projects' location={this.props.location}>
				<SEO
					title='Projects'
					keywords={[`gatsby`, `application`, `react`]}
				/>
				<StaticQuery
					query={graphql`
						query {
							trinoImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "trino" }
								}
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
									}
								}
							}
						}
					`}
					render={data => this.renderProjectsView(data)}
				/>
			</Layout>
		);
	}
}

export default ProjectsPage;
