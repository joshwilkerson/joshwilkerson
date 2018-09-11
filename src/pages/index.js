import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ScrollLink from 'react-scrollchor'
import VisibilitySensor from 'react-visibility-sensor'
import Icon from '../components/icon'
import SocialLinksPanel from '../components/social-links-panel'
import Thumbnails from '../components/thumbnails.js'
import resume from '../assets/josh-wilkerson-resume.pdf'


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.toggleSocialLinks = this.toggleSocialLinks.bind(this)

    this.state = {
      socialLinks: false
    }
  }

  toggleSocialLinks() {
    this.setState((prevState) => {
      return {
        socialLinks: !prevState.socialLinks
      }
    })
  }


  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allMarkdownRemark.edges


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

            <p>Take a look at my <ScrollLink to="#featured" animate={{duration: 200}}>featured work</ScrollLink> below or check out my <a onClick={this.toggleSocialLinks}>social channels</a>.</p>

            <a href={resume} className="btn" target="_blank">Download Resume</a>
            <a onClick={this.toggleSidebar} className="btn">Toggle Sidebar</a>
          </div>

          <SocialLinksPanel showLinks={this.state.socialLinks} toggleSocialLinks={this.toggleSocialLinks} />
        </section>


        <section id="featured">
          <h2>Featured Work</h2>
          <Thumbnails posts={posts} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___displayOrder], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            path
            thumbnail {
              childImageSharp{
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_noBase64
                  }
              }
            }
          }
        }
      }
    }
  }
`
