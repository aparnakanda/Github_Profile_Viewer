import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import ProfileCard from './components/profilecard';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (data.message !== 'Not Found') {
        setProfileData(data);

        // Fetch repos too
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await repoRes.json();
        setRepos(repoData);
      } else {
        setProfileData(null);
        setRepos([]);
        alert('User not found');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="app-container">
      <h1>GitHub Profile Viewer</h1>
      <SearchBar username={username} setUsername={setUsername} onSearch={handleSearch} />
      {profileData && <ProfileCard data={profileData} />}
      {repos.length > 0 && (
        <div className="repo-list">
          <h3>Public Repositories</h3>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;
