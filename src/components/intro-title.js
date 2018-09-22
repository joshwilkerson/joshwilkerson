import React from 'react'

class IntroTitle extends React.Component {

  componentDidUpdate(prevProps) {
    if(prevProps.isVisible != this.props.isVisible) {
      if(!this.props.isVisible) {
        this.props.compressSidebar()
      } else {
        this.props.expandSidebar()
      }
    }
  }

  render() {
    return (
      <div className="title">
        <h1>Josh Wilkerson</h1>
        <h2>Front-End Developer</h2>
      </div>
    )
  }
}

export default IntroTitle
