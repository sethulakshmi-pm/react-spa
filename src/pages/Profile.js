import './Profile.css';

import { Link, useLocation } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import React from 'react';
import { motion } from 'framer-motion';
import useGitHubData from '../hooks/useGitHubData';

const Profile = () => {
  const query = new URLSearchParams(useLocation().search);
  const username = query.get('username');

  const { data, loading, error } = useGitHubData(username, '');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return <ErrorMessage message="User not found." />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="profile-container"
    >
      <div className="profile">
        <div className="profile-header">
          <img src={data.avatar_url} alt={data.name} className="profile-avatar" />
          <div className="profile-info">
            <h2 className="profile-name">{data.name}</h2>
            <p className="profile-bio">{data.bio}</p>
          </div>
        </div>
        <nav className="profile-nav">
          <a href={`/followers?username=${username}`} className="nav-link">Followers</a>
          <a href={`/following?username=${username}`} className="nav-link">Following</a>
          <a href={`/repos?username=${username}`} className="nav-link">Repos</a>
        </nav>

        <Link to="/" className="back-to-home-btn">Back to Home</Link>
      </div>
    </motion.div>
  );
};

export default Profile;
