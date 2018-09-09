import React from 'react'
import Icon from './icon'

class SocialLinksPanel extends React.Component {

  render() {
    return (
      <div className={`socialLinksPanel ${this.props.showLinks && 'active'}`}>
      	<div className="inner">
      		<a onClick={this.props.toggleSocialLinks} className="closeBtn"></a>

      		<a href="https://github.com/joshwilkerson">
      			<Icon name="github" /> Github
      		</a>
      		<a href="https://dribbble.com/jgwilkerson">
      			<Icon name="dribbble" /> Dribbble
      		</a>
      		<a href="https://www.instagram.com/jgwilkerson/">
      			<Icon name="instagram" /> Instagram
      		</a>
      		<a href="https://twitter.com/jgwilkerson">
      			<Icon name="twitter" /> Twitter
      		</a>
      	</div>
      </div>
    )
  }
}

export default SocialLinksPanel
