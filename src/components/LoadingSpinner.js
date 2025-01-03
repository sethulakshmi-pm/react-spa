import './LoadingSpinner.css';

import ReactLoading from 'react-loading';

const LoadingSpinner = () => (
  <div className="loading">
    <ReactLoading type="spin" color="#000" height={50} width={50} />
  </div>
);

export default LoadingSpinner;
