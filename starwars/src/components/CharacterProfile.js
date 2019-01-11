import React from 'react'

const CharacterProfile = (props) => {
  return (
    <div className="character-profile">
      <h1>{props.name}</h1>
      <h2>Gender: {props.gender}</h2>
      <h2>Birth year: {props.birth_year}</h2>
    </div>
  )
}

export default CharacterProfile