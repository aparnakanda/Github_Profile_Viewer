import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import ProfileCard from './components/profilecard';
import RepoList from './components/repoList';
import Analysis from './components/analysis';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [view, setView] = useState('profile');

const fetchUser = async (username) => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setRepos([]);
      setView(null);
      alert("❌ User not found!");
      return;
    }
    const data = await res.json();
    setUser(data);
    setView('profile');
  } catch (error) {
    console.error("Error fetching user:", error);
    alert("An error occurred. Please try again.");
  }
};


  const fetchRepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    setRepos(data);
  };

  return (
    <div className="App">
      <h1>GitHub Profile Viewer</h1>
      <SearchBar onSearch={(username) => {
        fetchUser(username);
        fetchRepos(username);
      }} />

      {user && (
        <div>
          {view === 'profile' && <ProfileCard user={user} />}
          {view === 'repos' && <RepoList repos={repos} />}
          {view === 'analyze' && <Analysis user={user} repos={repos} />}

          <div className="btn-group">
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <button>Visit Profile</button>
            </a>
            <button onClick={() => setView('repos')}>View Public Repos</button>
            <button onClick={() => setView('analyze')}>Analyze Profile</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
