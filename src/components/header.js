import React from 'react'
import Link from 'gatsby-link'
import Scroll from 'react-scrollchor'

class Header extends React.Component {

  renderFeaturedLink() {
    if(this.props.currentRoute === "/") {
      return <Scroll to="#featured" animate={{duration: 200}}>featured work</Scroll>
    } else {
      return <Link to="/#featured">Featured Work</Link>
    }
  }

  render() {
    return (
      <header>
        <nav>
          {this.renderFeaturedLink()}
          <a href="mailto:josh@joshwilkerson.com">Contact</a>
        </nav>
      </header>
    )
  }
}

export default Header
