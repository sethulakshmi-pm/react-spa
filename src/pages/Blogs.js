import '../App.css';

import sas from './../components/sas.jpg';

const Blogs = () => {
  return (
    <div className="page-content">
      <h1 className="main-heading">Enabling Auto Page Transition Detection</h1>
      <br />

      <section className="blog-section">
        <h2 className="sub-heading">What is Page Transition Detection?</h2>
        <p className="description">
          Page transition detection refers to the ability of an application to track and detect when a page change occurs, typically in single-page applications (SPAs).
        </p>
        <img
          src={sas}
          alt="Page Transition Detection"
          className="blog-image"
        />
      </section>

      <section className="blog-section">
        <h2 className="sub-heading">Why is it Important?</h2>
        <p className="description">
          Detecting page transitions is crucial for improving user experience, ensuring that animations, loading states, and state persistence behave correctly during navigation.
        </p>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Importance of Detection"
          className="blog-image"
        />
      </section>

      <section className="blog-section">
        <h2 className="sub-heading">Implementing Page Transition Detection</h2>
        <p className="description">
          Implementing page transition detection involves detecting route changes and triggering animations or transitions during navigation in your application.
        </p>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Implementation Steps"
          className="blog-image"
        />
      </section>
    </div>
  );
};

export default Blogs;
