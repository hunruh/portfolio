import React from 'react'
import PropTypes from 'prop-types'

import NavMenuItem from './navmenuitem'

import animations from '../styles/animations.module.scss'
import styles from '../styles/navmenu.module.scss'

class NavMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exiting: false
        }
    }

    render() {
        const animationClass = this.state.exiting ? animations.swingExit : animations.swingEnter;

        return (
            <div className={`${styles.navMenu} ${animationClass}`}>
                {this.props.isOverlay &&
                    <div className={styles.close}>
                        <div className="container">
                            <button
                                className={styles.menuToggle}
                                onClick={() => {
                                    this.props.onClose()
                                    this.setState({ exiting: true })
                                }}>
                                close
                            </button>
                        </div>
                    </div>
                }
                <NavMenuItem className={animationClass} to="/page-2/" title="About" description="Lorem ipsum" />
                <NavMenuItem className={animationClass} to="/page-2/" title="Experience" description="Lorem ipsum" />
                <NavMenuItem className={animationClass} to="/page-2/" title="Projects" description="Lorem ipsum" />
                <NavMenuItem className={animationClass} to="/page-2/" title="Contact" description="Lorem ipsum" />
            </div>
        )
    }
}

NavMenu.propTypes = {
    isOverlay: PropTypes.bool,
    onClose: PropTypes.func
}

NavMenu.defaultProps = {
    isOverlay: false
};

export default NavMenu
