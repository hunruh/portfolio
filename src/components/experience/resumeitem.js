import React from 'react'
import PropTypes from 'prop-types'

import animations from '../../styles/animations.module.scss'
import styles from '../../styles/experience/resumeitem.module.scss'

const ResumeItem = ({
  title,
  titleNote,
  link,
  subTitle,
  description,
  startDate,
  endDate,
  shouldEnter,
}) => {
  const formattedStartDate =
    startDate === undefined ? 'Expected ' : startDate + ' - '
  const formattedEndDate = endDate === undefined ? 'Present' : endDate

  return (
    <div className={styles.resumeItem}>
      <div
        className={`${styles.date} ${
          shouldEnter ? animations.slideEnter : styles.hidden
        }`}
      >
        {formattedStartDate}
        <br />
        {formattedEndDate}
      </div>
      <div
        className={`${styles.itemBody} ${
          shouldEnter ? animations.slideEnter : styles.hidden
        }`}
      >
        <h3
          className={`${styles.title} ${
            shouldEnter ? animations.slideEnter : styles.hidden
          }`}
        >
          {title}
        </h3>
        <h3 className={styles.titleNote}>{titleNote}</h3>
        {link !== undefined && (
          <h3 className={styles.link}>
            <a href={link}>&raquo;</a>
          </h3>
        )}
        <p className={styles.subTitle}>{subTitle}</p>
        <p className={styles.mobileDate}>
          {formattedStartDate}
          {formattedEndDate}
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

ResumeItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleNote: PropTypes.string,
  link: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  shouldEnter: PropTypes.bool.isRequired,
}

export default ResumeItem
