import React from 'react'
import ScrollLink from 'react-scrollchor'
import resume from '../assets/josh-wilkerson-resume.pdf'

class IntroText extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(){
    if(this.props.isVisible) {
      console.log('expand sidebar')
    } else {
      console.log('compress sidebar')
    }
  }

  render() {
    return (
      <div className="intro--content">
        <div className="title">
          <h1>Josh Wilkerson</h1>
          <h2>Front-End Developer</h2>
        </div>

        <p>Hello! I'm Josh Wilkerson, a front-end web developer from Franklin, TN. Using over a decade of experience in art and graphic design combined with my technical expertise in modern web development, I create elegant, user-friendly web experiences that are as functional as they are beautiful.</p>

        <p>Take a look at my <ScrollLink to="#featured" animate={{duration: 200}}>featured work</ScrollLink> below or check out my <a onClick={this.props.toggleSocialLinks}>social channels</a>.</p>

        <a href={resume} className="btn" target="_blank">Download Resume</a>

        <div style={{display: 'block', marginTop: '20px', fontSize: '11px'}}>
          <button onClick={this.props.expandSidebar}>
            Expand Sidebar
          </button>

          <button onClick={this.props.compressSidebar}>
            Compress Sidebar
          </button>
        </div>
      </div>
    )
  }
}

export default IntroText
