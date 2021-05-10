
import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component.js'
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      'monsters': [],
      'searchFilter': ''
    }    
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
      <input type='search' 
      placeholder='Search Monsters'
      onChange={e => {this.setState({'searchFilter': e.target.value})}}/>
      <CardList monsters = {filteredMonsters} />
    </div>
    ); 
  }
}

export default App;
