import React, { Component } from 'react';
import './App.css';
import CharacterProfile from './components/CharacterProfile'
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="profile-container">
        {this.state.starwarsChars.map(character => {
          return(
          <CharacterProfile 
          name={character.name}
          gender={character.gender}
          birth_year={character.birth_year}
          height={character.height}
          mass={character.mass}
          />
          ) // end return statement
        })}
        </div>
        
      </div>
    );
  }
}

export default App;
