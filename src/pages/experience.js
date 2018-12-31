import React from 'react';

import ResumeItem from '../components/experience/resumeitem';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
			<Layout pageTitle='Experience'>
				<SEO
					title='Experience'
					keywords={[`gatsby`, `application`, `react`]}
				/>
				<h2>Education</h2>
				<ResumeItem
					title='Cornell University'
					titleNote='MEng'
					subTitle='Computer Science'
					description='Coursework: Advanced Game Design, Distributed Computing, Machine Learning'
					endDate='May 2019'
					shouldEnter={this.state.animationCounter >= 0}
				/>
				<ResumeItem
					title='Cornell University'
					titleNote='BA'
					subTitle='Computer Science'
					description='Coursework: Artificial Intelligence, Natural Language Processing'
					startDate='May 2015'
					endDate='December 2018'
					shouldEnter={this.state.animationCounter >= 1}
				/>

				<h2 className={styles.sectionHead}>Career</h2>
				<ResumeItem
					title='Ridgeline'
					subTitle='Product Engineer'
					link='https://ridgelineapps.com'
					description='I will be joining the engineering team at Ridgeline, an enterprise software development
                    company committed to delivering highly functional applications based on modern technologies.'
					startDate='July 2019'
					shouldEnter={this.state.animationCounter >= 2}
				/>
				<ResumeItem
					title='Iterate Labs'
					subTitle='Software Engineering Consultant'
					link='http://iteratelabs.co/'
					description='I lead front-end development of a client-facing data analytics platform including both
                    concept sketches and implementation with Node and React.'
					startDate='May 2017'
					shouldEnter={this.state.animationCounter >= 2}
				/>
				<ResumeItem
					title='Amazon'
					subTitle='Software Development Engineer Intern   '
					link='https://www.amazon.com/'
					description="I worked on Amazon's Transaction Risk Management team to combat fraud and protect
                    customer accounts, using machine learning and big data analysis to anticipate and identify attacks."
					startDate='May 2018'
					endDate='August 2018'
					shouldEnter={this.state.animationCounter >= 3}
				/>
				<ResumeItem
					title='Ridgeline'
					subTitle='Product Engineer'
					description='I will be joining the engineering team at Ridgeline, an enterprise software development company
                    committed to delivering highly functional applications based on modern technologies.'
					startDate='July 2019'
					shouldEnter={this.state.animationCounter >= 4}
				/>
			</Layout>
		);
	}
}

export default ExperiencePage;
