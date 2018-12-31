import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import '../../styles/projects/slick.scss';
import animations from '../../styles/animations.module.scss';
import layoutStyles from '../../styles/layout.module.scss';
import styles from '../../styles/projects/projectdetails.module.scss';

class ProjectDetails extends React.Component {
	constructor(props) {
		super(props);

		this.maxSlides =
			this.props.images !== undefined ? this.props.images.length : 0;
		this.carouselSettings = {
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: Math.min(2, this.maxSlides),
			slidesToScroll: Math.min(2, this.maxSlides),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		this.state = {
			zoomed: -1
		};
	}

	getPrettyUrl(url) {
		return url.substring(
			Math.max(
				url.indexOf('http://') + 7,
				url.indexOf('https://') + 8,
				url.indexOf('www.') + 4
			)
		);
	}

	render() {
		return (
			<div>
				{this.state.zoomed === -1 ? (
					<div
						className={layoutStyles.sideButton}
						onClick={this.props.onExit}>
						Return to Projects
					</div>
				) : (
					<div
						className={layoutStyles.sideButton}
						onClick={() => this.setState({ zoomed: -1 })}>
						Return to {this.props.title}
					</div>
				)}

				{this.state.zoomed === -1 ? (
					<div className={animations.slideEnter}>
						{this.maxSlides !== 0 && (
							<Slider
								className={styles.slider}
								{...this.carouselSettings}>
								{this.props.images.map((image, index) => (
									<div
										className={styles.sliderImageWrapper}
										key={image}
										onClick={() =>
											this.setState({ zoomed: index })
										}>
										<Img
											className={styles.sliderImage}
											sizes={
												image.node.childImageSharp.sizes
											}
										/>
										<div
											className={
												styles.sliderImageOverlay
											}
										/>
									</div>
								))}
							</Slider>
						)}
						<h2 className={styles.title}>{this.props.title}</h2>
						<p>{this.props.description}</p>
						<p className={styles.sectionHead}>Project Type</p>
						<p>{this.props.type}</p>
						<p className={styles.sectionHead}>Technologies</p>
						<p>{this.props.technologies}</p>
						<p className={styles.sectionHead}>Project Link</p>
						<p>
							<a
								className={styles.link}
								href={this.props.link}
								rel='noopener noreferrer'
								target='_blank'>
								{this.getPrettyUrl(this.props.link)}
							</a>
						</p>
						<p className={styles.sectionHead}>GitHub Link</p>
						<p>
							<a
								className={styles.link}
								href={this.props.github}
								rel='noopener noreferrer'
								target='_blank'>
								{this.getPrettyUrl(this.props.github)}
							</a>
						</p>
					</div>
				) : (
					<div>
						<Img
							className={`${styles.sliderImage} ${
								animations.slideEnter
							}`}
							sizes={
								this.props.images[this.state.zoomed].node
									.childImageSharp.sizes
							}
						/>
					</div>
				)}
			</div>
		);
	}
}

ProjectDetails.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	technologies: PropTypes.string,
	link: PropTypes.string,
	github: PropTypes.string,
	images: PropTypes.array,
	onExit: PropTypes.func
};

export default ProjectDetails;
