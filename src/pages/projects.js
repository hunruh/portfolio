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
			alerion: 'alerion',
			climateTrendVisualization: 'climateTrendVisualization',
			critterWorld: 'critterWorld',
			jade: 'jade',
			medium: 'medium',
			searchVisualization: 'searchVisualization',
			steamyReviews: 'steamyReviews',
			trino: 'trino'
		};

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
			case this.projects.alerion:
				return (
					<ProjectDetails
						title="Alerion"
						description="A complete redesign and build from scratch of the website for Alerion Capital
						Group. I worked with Alerion from design to implementation to update the company's website for
						mobile and high-definition displays. The website uses a custom theme built
						from scratch for Wordpress, using Wordpress as a content management system to ensure easy
						content updates."
						type="Website"
						technologies="CSS3, HTML5, jQuery, PHP, Wordpress"
						link="http://www.alerion.com"
						images={data.alerionImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.climateTrendVisualization:
				return (
					<ProjectDetails
						title="Climate Trends"
						description="An interactive visualization of temperature and natural disaster trends,
						utilizing D3.js. Alongside two other students I worked to develop an interactive web
						visualization as an open-ended project for CS3300 (Data-drive Web Applications) at Cornell. The
						visualization aims to convey the impact of rising temperatures in the United States since 1956
						on natural disaster occurences. We used D3.js and SVG graphics to implement the project
						following an exploratory process of storyboarding and prototyping."
						type="Interactive Visualization"
						technologies="D3.js"
						github="http://github.com/hunruh/cs3300-project2"
						images={data.climateVisualizationImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.critterWorld:
				return (
					<ProjectDetails
						title="Critter World"
						description='A networked artificial life simulation written in Java, with a custom organism
						programming language. I worked with another student to develop a step-based artificial life
						simulation as the culmination of CS2112 (Object-Oriented Design and Data Structures - Honors),
						at Cornell. The simulation focuses on "critters," organisms which were directed by programs
						written using a custom syntax in seperate text files. Our application parses these text files
						and interprets them to determine the actions of each critter on each step. Critters are provided
						with some senses, such as smell, which is implemented using Dijkstra’s algorithm. The project is
						networked and divided into two components: a Java server and JavaFX graphical user interface,
						between which data is transmitted using JSON. Through read/write locks, the server handles
						multiple users interacting with the simulation world at once. The graphical user interface draws
						the world and displays relevant information on the simulation world and its critters, and
						provides an interface for advancing the state of the world.'
						type="Artificial Life Simulation"
						technologies="Java, JavaFX"
						images={data.critterWorldImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.jade:
				return (
					<ProjectDetails
						title="Jade"
						description="A web application to improve the speed of human trafficking reporting by the New
						York Police Department. I collaborated with five other classmates to implement a web application
						for the End Human Trafficking hackathon, hosted at Cornell Tech. The application includes an
						optimized system for entering relevant information on both victims and suspects and a module for
						communication between responders. Our solution accelerated the reporting process by storing
						information in an SQLite database, making data instantaneously accessible by other members in
						the Department."
						type="Incident Reporting Web Application"
						technologies="CSS3, Flask, HTML5, Javascript, SQLite"
						github="http://github.com/julianohta/EHT2016"
						images={data.jadeImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.medium:
				return (
					<ProjectDetails
						title="Medium"
						description="An accessible web platform for Cornell's first interdisciplinary design community.
						I led a small team of web designers and developers to design and develop the web platform for
						Medium Design Collective, an interdisciplinary design organization at Cornell. We have already
						developed an informational platform for the organization and are working to expand the platform
						to include tools useful to Cornell students interested in design. Components of the platform
						under development include a section for publishing articles curated by the organization and tool
						for connecting students to other designers and design tools on campus."
						type="Website"
						technologies="CSS3, Django, Python, HTML5, jQuery"
						link="http://cornellmedium.design"
						images={data.mediumImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.searchVisualization:
				return (
					<ProjectDetails
						title="Brand Popularity"
						description="A static visualization of clothing brand search popularity, utilizing D3.js. I
						worked with a small group of students to develop a static web visualization as an open-ended
						project for CS3300 (Data-drive Web Applications) at Cornell. The intent of the visualization is
						to illustrate the popularity of select clothing brands across the United States, and reflect
						regional popularity of different brands relative to their popularity nationally. We used D3.js
						and SVG graphics to implement the project following multiple rounds of ideation and prototyping."
						type="Static Visualization"
						technologies="D3.js"
						github="http://github.com/hunruh/cs3300-project1"
						images={data.searchVisualizationImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.steamyReviews:
				return (
					<ProjectDetails
						title="Steamy Reviews"
						description="A game recommendation engine that evaluates game similarity by analyzing reviews on
						Steam. Working with three other students in the culmination of CS4300 (Language and Information)
						at Cornell, I developed an intelligent search application for suggesting similar games based on
						data gathered from user reviews. We incorporated a number of machine learning and search
						techniques using the Anaconda Python data science platform, including Rocchio relevance feedback
						and Jaccard similarity evaluation."
						type="Game Recommendation Engine"
						technologies="Anaconda, Bootstrap, Flask, Python"
						link="http://steamyreviews.infosci.cornell.edu"
						github="https://github.com/PapaCharlie/SteamyReviews"
						images={data.steamyReviewsImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			case this.projects.trino:
				return (
					<ProjectDetails
						title="Trino"
						description="I led programming in a team of six students to develop Trino as part of CS3152
						(Introduction to Game Design) at Cornell. Trino is a strategy game that features a dinosaur
						named Duggi who is trying to find his way home. Trino focuses on resource gathering and
						transformation. Duggi has three forms that it can transform into: a cotton doll, a herbivore and
						a carnivore. Each of these forms has its own strengths and weaknesses, and different resources
						that it needs to gather. Only once Duggi has gathered all the necessary resources is he able to
						transform into another form. Faced with challenging mazes and scary enemies, Duggi must use all
						three forms to find a way to escape without being eaten. Trino won the Audience Choice award at
						the 2018 Game Design Initiative at Cornell Showcase (with over 500 attendees), and was selected
						as an exhibitor for the 2018 Boston Festival of Indie Games."
						type="Puzzle Game"
						technologies="Java, LibGDX"
						link="http://trinothegame.com"
						images={data.trinoImages.edges}
						onExit={() => this.exitProjectDetails()}
					/>
				);
			default:
				return (
					<div>
						<ProjectTile
							projectTitle="Trino"
							projectType="Puzzle Game"
							thumbnailSizes={
								data.trinoImages.edges[0].node.childImageSharp
									.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.trino
								})
							}
							shouldEnter={this.state.animationCounter >= 0}
						/>
						<ProjectTile
							projectTitle="Steamy Reviews"
							projectType="Data Analyzer"
							thumbnailSizes={
								data.steamyReviewsImages.edges[0].node
									.childImageSharp.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.steamyReviews
								})
							}
							shouldEnter={this.state.animationCounter >= 1}
						/>
						<ProjectTile
							projectTitle="Medium"
							projectType="Website"
							thumbnailSizes={
								data.mediumImages.edges[0].node.childImageSharp
									.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.medium
								})
							}
							shouldEnter={this.state.animationCounter >= 2}
						/>
						<ProjectTile
							projectTitle="Climate Trends"
							projectType="Visualization"
							thumbnailSizes={
								data.climateVisualizationImages.edges[0].node
									.childImageSharp.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects
										.climateTrendVisualization
								})
							}
							shouldEnter={this.state.animationCounter >= 3}
						/>
						<ProjectTile
							projectTitle="Brand Popularity"
							projectType="Visualization"
							thumbnailSizes={
								data.searchVisualizationImages.edges[0].node
									.childImageSharp.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects
										.searchVisualization
								})
							}
							shouldEnter={this.state.animationCounter >= 4}
						/>
						<ProjectTile
							projectTitle="Alerion"
							projectType="Website"
							thumbnailSizes={
								data.alerionImages.edges[0].node.childImageSharp
									.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.alerion
								})
							}
							shouldEnter={this.state.animationCounter >= 5}
						/>
						<ProjectTile
							projectTitle="Jade"
							projectType="Web App"
							thumbnailSizes={
								data.jadeImages.edges[0].node.childImageSharp
									.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.jade
								})
							}
							shouldEnter={this.state.animationCounter >= 6}
						/>
						<ProjectTile
							projectTitle="Critter World"
							projectType="Simulation"
							thumbnailSizes={
								data.critterWorldImages.edges[0].node
									.childImageSharp.sizes
							}
							onClick={() =>
								this.setState({
									selectedProject: this.projects.critterWorld
								})
							}
							shouldEnter={this.state.animationCounter >= 7}
						/>
					</div>
				);
		}
	}

	render() {
		return (
			<Layout pageTitle="Projects" location={this.props.location}>
				<SEO title="Projects" />
				<StaticQuery
					query={graphql`
						query {
							alerionImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "alerion" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							climateVisualizationImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: {
										eq: "climate_trend_visualization"
									}
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							critterWorldImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "critter_world" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							jadeImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "jade" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							mediumImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "medium" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							searchVisualizationImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: {
										eq: "search_visualization"
									}
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							steamyReviewsImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "steamy_reviews" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
									}
								}
							}
							trinoImages: allFile(
								filter: {
									extension: { regex: "/(jpeg|jpg|gif|png)/" }
									relativeDirectory: { eq: "trino" }
								}
								sort: { fields: [name], order: ASC }
							) {
								edges {
									node {
										childImageSharp {
											sizes(maxWidth: 2000) {
												...GatsbyImageSharpSizes
											}
										}
										name
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
