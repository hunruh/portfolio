import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import styles from '../../styles/about/stat.module.scss';

const Stat = ({ label, value, image, countDelay }) => (
	<div className={styles.stat}>
		<div className={styles.imageWrapper}>{image}</div>
		<div className={styles.value}><CountUp delay={countDelay} duration={2} end={value} /></div>
		<div className={styles.label}>{label}</div>
	</div>
);

Stat.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	image: PropTypes.node.isRequired,
	countDelay: PropTypes.number
};

Stat.defaultProps = {
	countDelay: 0
};

export default Stat;
