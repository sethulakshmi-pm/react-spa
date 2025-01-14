import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>HOME Page Title</title>
      </Helmet>
      <h1>Welcome to the Home Page!</h1>
      <h2>React SPA with auto page detection.</h2>
    </div>
  );
};

export default Home;