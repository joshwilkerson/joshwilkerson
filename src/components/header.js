import React from 'react'
import Link from 'gatsby-link'
import ScrollLink from 'react-scrollchor'

class Header extends React.Component {

  render() {
    return (
      <header>
        <nav>
          {this.props.currentRoute === "/" ? (
            <ScrollLink to="#featured" animate={{duration: 200}}>Featured Work</ScrollLink>
          ) : (
            <Link to="/#featured">Featured Work</Link>
          )}
          <a href="mailto:josh@joshwilkerson.com">Contact</a>
        </nav>
      </header>
    )
  }
}

export default Header
