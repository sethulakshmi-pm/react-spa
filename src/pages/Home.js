import './Home.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username) {
      navigate(`/profile?username=${username}`);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="home-page-title">React SPA Example</h1>
      <div className="home">
        <div className="home-container">
          <h1 className="home-title">GitHub Profile Search</h1>
          <p className="home-description">Enter a GitHub username to view the profile details.</p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
