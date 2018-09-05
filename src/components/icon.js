import React from 'react'

const Icon = (props) => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#icon-${props.name}`} fill={props.fill}/>
  </svg>
)

export default Icon
