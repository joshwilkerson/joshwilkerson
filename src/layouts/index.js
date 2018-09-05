import React from 'react'
import Link from 'gatsby-link'

import IconSprite from '../assets/icons.svg'
import '../assets/scss/compile.scss'

import Header from '../components/header'
import Sidebar from '../components/sidebar'

class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarClass: 'default',
      socialLinksPanel: 'hidden'
    }
  }

  render() {
    const { children, location, data } = this.props

    return (
      <div>
        <IconSprite />
        <Header currentRoute={location.pathname} />
        <div className="page">
          <Sidebar currentRoute={location.pathname} {...this.state} />
          {children()}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
