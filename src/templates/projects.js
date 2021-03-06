import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Icon from '../components/icon'

const ProjectsTemplate = (props) => {

  const project = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const url = project.frontmatter.url

  return (
    <div id="content">
      <Helmet title={`${project.frontmatter.title} | ${siteTitle}`} />

      <section className="details">
        <div>
          <Link to="/featured-work" className="backBtn">
            <Icon name="chevron-left" /> Back
          </Link>
        </div>

        <h1>{project.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: project.html }} />

      {url && <a href={url} className="btn">View Site</a>}
      </section>
    </div>
  )
}

export default ProjectsTemplate


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        url
      }
    }
  }
`
