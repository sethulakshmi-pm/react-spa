import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Followers from './pages/Followers';
import Following from './pages/Following';
import Home from './pages/Home';
import Profile from './pages/Profile';
import React from 'react';
import Repos from './pages/Repos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
        <Route path="/repos" element={<Repos />} />
      </Routes>
    </Router>
  );
}

export default App;
