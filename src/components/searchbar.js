import React from 'react';

function SearchBar({ username, setUsername, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
