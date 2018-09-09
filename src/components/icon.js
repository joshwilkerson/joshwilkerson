import React from 'react'

class Icon extends React.Component {
  
  render() {
    return (
      <svg className={`icon icon-${this.props.name}`}>
        <use xlinkHref={`#icon-${this.props.name}`} fill={this.props.fill}/>
      </svg>
    )
  }
}

export default Icon
