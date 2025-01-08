import '../App.css';

import { Helmet } from 'react-helmet';
import React from 'react';

const Contact = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>Contact Page Title</title>
      </Helmet>
      <h1>Contact Me</h1>
      <div className="email-wrapper">
        <span className="moving-email">sethulakshmi.pm@ibm.com</span>
      </div>
    </div>
  );
};

export default Contact;
