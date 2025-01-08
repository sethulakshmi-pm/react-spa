import { Helmet } from 'react-helmet';
const NoPage = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>Contact Page Title</title>
      </Helmet>
      <h1>404 Page Not Found!</h1>
    </div>);
};

export default NoPage;