import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => {
  return (
    <header>
      <nav>
        <Link to="/featured-work">Featured Work</Link>
        <a href="mailto:josh@joshwilkerson.com">Contact</a>
      </nav>
    </header>
  )
}

export default Header
