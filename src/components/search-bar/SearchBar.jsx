import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const { term, onSearch, placeholder } = props;
  return (
    <input
      className="search"
      type="search"
      value={term}
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default SearchBar;
