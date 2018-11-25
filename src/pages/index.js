import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Icon from '../components/icon'
import SocialLinksPanel from '../components/social-links-panel'
import resume from '../assets/josh-wilkerson-resume.pdf'


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSocialLinks = this.toggleSocialLinks.bind(this)

    this.state = {
      displaySocialLinksPanel: false
    }
  }

  toggleSocialLinks() {
    this.setState((prevState) => {
      return {
        displaySocialLinksPanel: !prevState.displaySocialLinksPanel
      }
    })
  }


  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div id="content">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <section id="intro">
          <div className="intro--content">
            <div className="title">
              <h1>Josh Wilkerson</h1>
              <h2>Front-End Developer</h2>
            </div>

            <p>Hello! I'm Josh Wilkerson, a front-end web developer from Franklin, TN. Using over a decade of experience in art and graphic design combined with my technical expertise in modern web development, I create elegant, user-friendly web experiences that are as functional as they are beautiful.</p>

            <p>Take a look at my <Link to="/featured-work">featured work</Link> below or check out my <a onClick={this.toggleSocialLinks}>social channels</a>.</p>

            <a href={resume} className="btn" target="_blank">Download Resume</a>
          </div>

          <SocialLinksPanel
            displaySocialLinksPanel={this.state.displaySocialLinksPanel}
            toggleSocialLinks={this.toggleSocialLinks}
          />
        </section>
      </div>
    )
  }
}

export default Home


export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
