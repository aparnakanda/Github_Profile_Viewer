import React from 'react';

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <h3 className="repo-title">📂 Public Repositories</h3>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h4 className="repo-name">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p className="repo-description">{repo.description || 'No description provided.'}</p>
            <div className="repo-meta">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              {repo.language && <span>💻 {repo.language}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
