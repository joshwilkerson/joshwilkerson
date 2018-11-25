import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Icon from '../components/icon'
import Thumbnails from '../components/thumbnails.js'



const FeaturedWork = (props) => {

  const siteTitle = props.data.site.siteMetadata.title
  const siteDescription = props.data.site.siteMetadata.description
  const posts = props.data.allMarkdownRemark.edges

  return (
    <div id="content">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <section id="featured">
        <h2>Featured Work</h2>
        <Thumbnails posts={posts} />
      </section>
    </div>
  )
}

export default FeaturedWork


export const pageQuery2 = graphql`
  query PageQuery2 {
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
