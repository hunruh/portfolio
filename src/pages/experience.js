import React from 'react';
import { withPrefix } from 'gatsby';

import ResumeItem from '../components/experience/resumeitem';
import Layout from '../components/layout';
import SEO from '../components/seo';

import layoutStyles from '../styles/layout.module.scss';
import styles from '../styles/experience.module.scss';

class ExperiencePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animationCounter: 0
		};

		this.maxAnimationSteps = 5;
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
			<Layout pageTitle="Experience" location={this.props.location}>
				<SEO title="Experience" />
				<a
					className={layoutStyles.sideButton}
					href={withPrefix('/resume.pdf')}>
					Resume PDF
				</a>
				<h2 className={styles.topHead}>Education</h2>
				<ResumeItem
					title="Cornell University"
					titleNote="MEng"
					subTitle="Computer Science"
					description="Selected Coursework: Advanced Game Design, Distributed Computing, Machine Learning"
					endDate="May 2019"
					shouldEnter={this.state.animationCounter >= 0}
				/>
				<ResumeItem
					title="Cornell University"
					titleNote="BA"
					subTitle="Computer Science"
					subSubTitle="Linguistics"
					description="Selected Coursework: Analysis of Algorithms, Artificial Intelligence, Databases,
					Functional Programming, Information Retrieval, Natural Language Processing, Operating Systems,
					Systems Programming"
					startDate="May 2015"
					endDate="December 2018"
					shouldEnter={this.state.animationCounter >= 1}
				/>

				<h2 className={styles.sectionHead}>Career</h2>
				<ResumeItem
					title="Ridgeline"
					subTitle="Product Engineer"
					link="https://ridgelineapps.com"
					description="I will be joining the engineering team at Ridgeline, an enterprise software development
                    company committed to delivering highly functional applications based on modern technologies."
					startDate="July 2019"
					shouldEnter={this.state.animationCounter >= 2}
				/>
				<ResumeItem
					title="Iterate Labs"
					subTitle="Software Engineering Consultant"
					link="http://iteratelabs.co/"
					description="I lead front-end development of a client-facing data analytics platform including both
                    concept sketches and implementation with Node and React."
					startDate="May 2017"
					shouldEnter={this.state.animationCounter >= 2}
				/>
				<ResumeItem
					title="Amazon"
					subTitle="Software Development Engineer Intern   "
					link="https://www.amazon.com/"
					description="I worked on Amazon's Transaction Risk Management team to combat fraud and protect
                    customer accounts, using machine learning and big data analysis to anticipate and identify attacks."
					startDate="May 2018"
					endDate="August 2018"
					shouldEnter={this.state.animationCounter >= 3}
				/>
				<ResumeItem
					title="Silver Spring Networks"
					subTitle="Software Engineering Intern"
					link="https://www.silverspringnet.com/"
					description="I configured and deployed a Docker-based data ingestion and management platform using
					Amazon Web Services, a Hadoop stack, and Apache NiFi. I also debugged and resolved user
					experiences issues in a React.js-based web platform."
					startDate="May 2017"
					endDate="August 2017"
					shouldEnter={this.state.animationCounter >= 4}
				/>
				<ResumeItem
					title="RallyMe"
					subTitle="Software Development Intern"
					link="https://www.rallyme.com/"
					description="I worked using Ruby on Rails to expand and update RallyMe’s testing framework.
					I also implemented an updated analytics system to monitor site traffic and track ecommerce."
					startDate="Jun 2016"
					endDate="August 2016"
					shouldEnter={this.state.animationCounter >= 5}
				/>
			</Layout>
		);
	}
}

export default ExperiencePage;
