import './RepoCard.css';

import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p>{repo.description || 'No description available'}</p>
      <div className="repo-details">
        <span>⭐ {repo.stargazers_count}</span>
        <span>Forks: {repo.forks_count}</span>
      </div>
    </div>
  );
};

export default RepoCard;
