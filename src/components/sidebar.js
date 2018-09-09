import React from 'react'
import Link from 'gatsby-link'
import Icon from './icon'
import portrait from '../assets/images/portrait-jw.jpg'

class Sidebar extends React.Component {
  render() {
    return (
      <aside id="sidebar">
        {this.props.currentRoute === "/" ? (
          <h2 className="altTitle">Josh Wilkerson</h2>
        ) : (
          <Link to="/" className="altTitle">Josh Wilkerson</Link>
        )}
        
        <a className="contact" href="mailto:josh@joshwilkerson.com">Contact</a>

        <div className="socialLinks">
          <a href="https://github.com/joshwilkerson">
            <Icon name="github" />
          </a>
          <a href="https://dribbble.com/jgwilkerson">
            <Icon name="dribbble" />
          </a>
          <a href="https://www.instagram.com/jgwilkerson/">
            <Icon name="instagram" />
          </a>
          <a href="https://twitter.com/jgwilkerson">
            <Icon name="twitter" />
          </a>
          <a href="mailto:josh@joshwilkerson.com">
            <Icon name="envelope-o" />
          </a>
        </div>
      <div className="bg" style={{backgroundImage: `url(${portrait})`}}></div>
    </aside>
    )
  }
}

export default Sidebar
