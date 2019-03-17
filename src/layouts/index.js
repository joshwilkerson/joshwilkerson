import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

import IconSprite from '../assets/icons.svg'
import '../assets/scss/compile.scss'

class Template extends React.Component {
  constructor(props){
    super(props)
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
          <Sidebar currentRoute={location.pathname} />
          {children({...this.props})}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
