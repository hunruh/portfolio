import React from 'react';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';

import Layout from '../components/layout';
import SEO from '../components/seo';

import animations from '../styles/animations.module.scss';
import styles from '../styles/contact.module.scss';

const ContactPage = ({ location }) => (
	<Layout pageTitle="Contact" location={location}>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<div className={animations.slideEnter}>
			<a className={styles.socialButton} href="https://github.com/hunruh">
				<LogoGithub className={styles.socialImage} />
			</a>
			<a
				className={styles.socialButton}
				href="http://www.linkedin.com/in/harrisonunruh/">
				<LogoLinkedin className={styles.socialImage} />
			</a>
			<a
				className={styles.socialButton}
				href="http://www.instagram.com/harrison.u/">
				<LogoInstagram className={styles.socialImage} />
			</a>
		</div>
		<h2 className={styles.descriptionHead}>Feel Free to Connect</h2>
		<p className={animations.slideEnter}>
			Any questions about my work? Don't hesitate to send me a message.
		</p>
		<a
			href="mailto:harrison.unruh@gmail.com"
			className={`${styles.email} ${animations.slideEnter}`}>
			harrison.unruh at gmail.com
		</a>
	</Layout>
);

export default ContactPage;
