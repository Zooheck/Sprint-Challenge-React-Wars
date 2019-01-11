import React, { Component } from 'react';
import './App.css';
import CharacterProfile from './components/CharacterProfile'
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      displayedCharacter: {},
      previous: undefined,
      next: undefined
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
        this.setState({ 
          starwarsChars: data.results,
          displayedCharacter: data.results[0],
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  toggleNext = event => {
    event.preventDefault();
    const currentDisplayIndex = this.state.starwarsChars.indexOf(this.state.displayedCharacter)
    this.setState(previousState => {
      if (currentDisplayIndex === (this.state.starwarsChars.length - 1)) {
        return {
          displayedCharacter: previousState.starwarsChars[0]
        }
      }
      return {
        displayedCharacter: previousState.starwarsChars[currentDisplayIndex + 1]
      }
    })
  }
  togglePrevious = event => {
    event.preventDefault();
    const currentDisplayIndex = this.state.starwarsChars.indexOf(this.state.displayedCharacter)
    this.setState(previousState => {
      if (currentDisplayIndex === 0) {
        return {
          displayedCharacter: previousState.starwarsChars[(this.state.starwarsChars.length - 1)]
        }
      }
      return {
        displayedCharacter: previousState.starwarsChars[currentDisplayIndex - 1]
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="profile-container">
        {/* {this.state.starwarsChars.map(character => {
          return(
          <CharacterProfile 
          name={character.name}
          gender={character.gender}
          birth_year={character.birth_year}
          height={character.height}
          mass={character.mass}
          />
          ) // end return statement
        })} */}
        <CharacterProfile
        name={this.state.displayedCharacter.name}
        gender={this.state.displayedCharacter.gender}
        birth_year={this.state.displayedCharacter.birth_year}
        height={this.state.displayedCharacter.height}
        mass={this.state.displayedCharacter.mass}
        toggleNext={this.toggleNext}
        togglePrevious={this.togglePrevious}
        />
        </div>
        
      </div>
    );
  }
}

export default App;
