import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TrackVisibility from 'react-on-screen';
import Icon from '../components/icon'
import SocialLinksPanel from '../components/social-links-panel'
import Thumbnails from '../components/thumbnails.js'
import IntroText from '../components/intro-text.js'


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
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div id="content">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <section id="intro">
          <TrackVisibility>
            <IntroText
              toggleSocialLinks={this.toggleSocialLinks}
              expandSidebar={this.props.expandSidebar}
              compressSidebar={this.props.compressSidebar}
            />
        </TrackVisibility>

          <SocialLinksPanel
            displaySocialLinksPanel={this.state.displaySocialLinksPanel}
            toggleSocialLinks={this.toggleSocialLinks}
          />
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
