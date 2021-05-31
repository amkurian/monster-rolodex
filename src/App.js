
import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component.js'
import {SearchBox} from './components/search-box/search-box.component.js'

import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      'monsters': [],
      'searchFilter': ''
    }    
  }

  handleChange = e => {
    this.setState({'searchFilter': e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({'monsters': users}))
  }

  render(){
   const {monsters, searchFilter} = this.state
   const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchFilter.toLowerCase())
        )
   return (
    <div className="App">
     <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters = {filteredMonsters} />
    </div>
    ); 
  }
}

export default App;
