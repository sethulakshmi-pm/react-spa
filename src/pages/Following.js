import './Following.css';

import { useLocation, useNavigate } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import React from 'react';
import useGitHubData from '../hooks/useGitHubData';

const Following = () => {
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username');

  const { data, loading, error } = useGitHubData(username, '/following');
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/profile?username=${username}`);
  };

  const goToHome = () => {
    navigate('/');
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <ErrorMessage message="Not following anyone." />;

  return (
    <div className="following">
      <h2 className="following-title">Following of {username}</h2>
      <ul className="following-list">
        {data.map(following => (
          <li key={following.id} className="following-item">
            <img src={following.avatar_url} alt={following.login} className="following-avatar" />
            <div className="following-info">
              <h4 className="following-name">{following.login}</h4>
              <a href={following.html_url} target="_blank" rel="noopener noreferrer" className="following-link">
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

export default Following;
