import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSearch(username.trim());
  };

  return (
    <div className='search-bar'>
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchBar;
