import React from 'react'
import './character-profile.css'
const CharacterProfile = (props) => {
  return (
    <div className="character-profile">
      <h2>{props.name}</h2>
      <h3>Gender: {props.gender}</h3>
      <h3>Birth year: {props.birth_year}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Mass: {props.mass}</h3>
    </div>
  )
}

export default CharacterProfile