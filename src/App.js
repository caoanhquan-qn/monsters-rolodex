import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/search-bar/SearchBar';
import CardList from './components/card-list/CardList';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setMonsters(res.data));
  }, []);

  const searchTerm = searchInput.trim().toLowerCase();
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar
        term={searchInput}
        onSearch={setSearchInput}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
