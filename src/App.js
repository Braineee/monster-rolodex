import React, {  Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())// Returns a promise
    .then(user => this.setState({monsters: user}));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeHolder="Search Monster" 
          handleSearch = {this.handleChange} />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;