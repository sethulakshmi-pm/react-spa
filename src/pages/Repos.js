import './Repos.css'

import { useLocation, useNavigate } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import React from 'react';
import RepoCard from '../components/RepoCard';
import useGitHubData from '../hooks/useGitHubData';

const Repos = () => {
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username');

  const { data, loading, error } = useGitHubData(username, '/repos');
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile?username=${username}`);
  };

  const goToHome = () => {
    navigate('/');
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <ErrorMessage message="No repositories found." />;

  return (
    <div className="repos">
      <h2>{username}'s Repositories</h2>
      <div className="repos-list">
        {data.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="following-buttons">
        <button className="following-button" onClick={goToProfile}>Go to Profile</button>
        <button className="following-button" onClick={goToHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default Repos;
