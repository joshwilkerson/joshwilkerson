import React from 'react'
import Link from 'gatsby-link'
import Icon from './icon'


class BackLink extends React.Component {

  render() {
    return (
      <div>
        <Link to="/#featured" className="backBtn">
          <Icon name="chevron-left" /> Back
        </Link>
      </div>
    )
  }
}

export default BackLink
