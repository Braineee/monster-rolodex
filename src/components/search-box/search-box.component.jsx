import React from 'react';
import './search-box.styles.css'

const SearchBox = ({ placeHolder, handleSearch }) => {
  return (
    <input
      className = "search"
      type = "search"
      placeholder = { placeHolder }
      onChange = { handleSearch } 
    />
  )
};

export default SearchBox