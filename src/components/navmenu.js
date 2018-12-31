import React from 'react'
import PropTypes from 'prop-types'

import Logo from './logo'
import NavMenuItem from './navmenuitem'

import animations from '../styles/animations.module.scss'
import styles from '../styles/navmenu.module.scss'

class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exiting: false,
    }
  }

  render() {
    const animationClass = this.state.exiting
      ? animations.swingExit
      : animations.swingEnter

    return (
      <div className={`${styles.navMenu} ${animationClass}`}>
        {this.props.isOverlay ? (
          <div className={styles.close}>
            <div className="container">
              <button
                className={styles.menuToggle}
                onClick={() => {
                  this.props.onClose()
                  this.setState({ exiting: true })
                }}
              >
                close
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.branding}>
            <div className="container">
              <div className={styles.logoWrapper}>
                <Logo />
              </div>
              <div className={styles.headshotWrapper} />
            </div>
          </div>
        )}
        <NavMenuItem
          className={animationClass}
          to="/about/"
          title="About"
          description="Who I Am and What I Do"
        />
        <NavMenuItem
          className={animationClass}
          to="/experience/"
          title="Experience"
          description="Education and Employment"
        />
        <NavMenuItem
          className={animationClass}
          to="/projects/"
          title="Projects"
          description="Personal and Student Work"
        />
        <NavMenuItem
          className={animationClass}
          to="/contact/"
          title="Contact"
          description="Want to Know More?"
        />
      </div>
    )
  }
}

NavMenu.propTypes = {
  isOverlay: PropTypes.bool,
  onClose: PropTypes.func,
}

NavMenu.defaultProps = {
  isOverlay: false,
}

export default NavMenu
