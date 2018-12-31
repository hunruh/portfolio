import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/about/skillgroup.module.scss';

function generateSkillPoints(points, maxPoints) {
	var skills = [];
	for (var i = 0; i < maxPoints; i++) {
		skills.push(
			<span
				className={`${styles.skillPoint} ${i < points ? styles.fullSkill : ''}`}
				key={i}
			/>
		);
	}

	return <span className={styles.skillPointSection}>{skills}</span>;
}

const SkillGroup = ({ points, maxPoints, title, children }) => (
	<div className={styles.skillGroup}>
		<p className={styles.skillGroupHeader}>
			{generateSkillPoints(points, maxPoints)}
			<b>{title}</b>
		</p>
		{children}
	</div>
);

SkillGroup.propTypes = {
	points: PropTypes.number.isRequired,
	maxPoints: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default SkillGroup;
