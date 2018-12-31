import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import animations from '../../styles/animations.module.scss'
import styles from '../../styles/projects/projecttile.module.scss'

const ProjectTile = ({
  projectTitle,
  projectType,
  thumbnailSizes,
  onClick,
  shouldEnter,
}) => (
  <div
    className={`${styles.projectTile} ${
      shouldEnter ? animations.slideEnter : styles.hidden
    }`}
  >
    <div className={styles.thumbnailWrapper} onClick={onClick}>
      <Img className={styles.thumbnail} sizes={thumbnailSizes} />
      <div className={styles.thumbnailOverlay} />
      <h2 className={styles.expand}>Expand</h2>
    </div>
    <h4 className={styles.title}>{projectTitle}</h4>
    <h4 className={styles.type}>{projectType}</h4>
  </div>
)

ProjectTile.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  thumbnailSizes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ProjectTile
