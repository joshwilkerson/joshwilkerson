import React from 'react'
import Img from 'gatsby-image'

const Thumbnails = (props) => {

  const posts = props.posts

  return (
    <div className="thumbnails">
      {posts.map(({ node }) => {
        return (
          <a key={node.frontmatter.title} href={node.frontmatter.path}>
            <Img sizes={node.frontmatter.thumbnail.childImageSharp.sizes} />
          </a>
        )
      })}
    </div>
  )
}

export default Thumbnails
