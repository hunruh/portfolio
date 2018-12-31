import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/about/stat.module.scss'

const Stat = ({ label, value, image }) => (
  <div className={styles.stat}>
    <div className={styles.imageWrapper}>{image}</div>
    <div className={styles.value}>{value}</div>
    <div className={styles.label}>{label}</div>
  </div>
)

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  image: PropTypes.node.isRequired,
}

export default Stat
