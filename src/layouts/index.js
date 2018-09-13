import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

import IconSprite from '../assets/icons.svg'
import '../assets/scss/compile.scss'

class Template extends React.Component {
  constructor(props){
    super(props)

    this.expandSidebar = this.expandSidebar.bind(this)
    this.compressSidebar = this.compressSidebar.bind(this)

    this.state = {
      sidebarExpanded: true
    }
  }


  expandSidebar() {
    this.setState((prevState) => {
      return {
        sidebarExpanded: true
      }
    })
  }

  compressSidebar() {
    this.setState((prevState) => {
      return {
        sidebarExpanded: false
      }
    })
  }

  render() {
    const { children, location, data } = this.props
    const expandSidebar = { expandSidebar: this.expandSidebar }
    const compressSidebar = { compressSidebar: this.compressSidebar }

    return (
      <div>
        <IconSprite />
        <Header currentRoute={location.pathname} />
        <div className="page">
          <Sidebar
            currentRoute={location.pathname}
            isExpanded={this.state.sidebarExpanded}
          />
          {children({...this.props, ...expandSidebar, ...compressSidebar})}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
