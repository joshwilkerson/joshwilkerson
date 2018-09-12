import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

import IconSprite from '../assets/icons.svg'
import '../assets/scss/compile.scss'

class Template extends React.Component {
  constructor(props){
    super(props)

    this.toggleSidebar = this.toggleSidebar.bind(this)

    this.state = {
      sidebarExpanded: false
    }
  }

  toggleSidebar() {
    this.setState((prevState) => {
      return {
        sidebarExpanded: !prevState.sidebarExpanded
      }
    })
  }

  render() {
    const { children, location, data } = this.props
    const toggleSidebar = { toggleSidebar: this.toggleSidebar }

    return (
      <div>
        <IconSprite />
        <Header currentRoute={location.pathname} />
        <div className="page">
          <Sidebar
            currentRoute={location.pathname}
            isExpanded={this.state.sidebarExpanded}
            toggleSidebar={this.toggleSidebar}
          />
        {children({...this.props, ...toggleSidebar})}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
