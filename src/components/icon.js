import React from 'react'

const Icon = (props) => {
  return (
    <svg className={`icon icon-${props.name}`}>
      <use xlinkHref={`#icon-${props.name}`} fill={props.fill}/>
    </svg>
  )
}

export default Icon
