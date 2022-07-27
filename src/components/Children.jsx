import React from 'react'

const Children = (props) => {
  return (
    <div>
        <h1>we are rendering children</h1>
        {props.children}
        <h1>end</h1>
    </div>
  )
}

export default Children