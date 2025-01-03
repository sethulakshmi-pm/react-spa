import './Followers.css';

import { useLocation, useNavigate } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import React from 'react';
import useGitHubData from '../hooks/useGitHubData';

const Followers = () => {
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username');

  const { data, loading, error } = useGitHubData(username, '/followers');
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile?username=${username}`);
  };

  const goToHome = () => {
    navigate('/');
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <ErrorMessage message="No followers found." />;

  return (
    <div className="followers">
      <h2 className="followers-title">Followers of {username}</h2>
      <ul className="followers-list">
        {data.map(follower => (
          <li key={follower.id} className="follower-item">
            <img src={follower.avatar_url} alt={follower.login} className="follower-avatar" />
            <div className="follower-info">
              <h4 className="follower-name">{follower.login}</h4>
              <a href={follower.html_url} target="_blank" rel="noopener noreferrer" className="follower-link">
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="following-buttons">
        <button className="following-button" onClick={goToProfile}>Go to Profile</button>
        <button className="following-button" onClick={goToHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default Followers;
