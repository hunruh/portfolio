import PropTypes from 'prop-types'
import React from 'react'

import Logo from './logo'
import NavMenu from './navmenu'

import styles from '../styles/header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuVisible: false
        }
    }

    render() {
        return (
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <h1 className={styles.pageTitle}>{this.props.pageTitle}</h1>
                    <button className={styles.menuToggle} onClick={() => this.setState({ menuVisible: true })}>
                        menu
                    </button>
                </div>
                {this.state.menuVisible &&
                    <NavMenu onClose={() => setTimeout(() => this.setState({ menuVisible: false }), 500)} isOverlay />
                }
            </div>
        )
    }
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Header