import React from 'react'
import './character-profile.css'
const Button = (props) => {
  return (
      <button onClick={props.onClick} disabled={!props.newPage ? true : null}>{props.buttonText}</button>
  )
}

export default Button