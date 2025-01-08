import '../App.css';

import { Helmet } from 'react-helmet';

// import sas from './../components/sas.jpg';

const Blogs = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>BLOGS Page Title</title>
      </Helmet>
      <h1 className="main-heading">Auto Page Transition Detection</h1>
      <br />

      <section className="blog-section">
        <h2 className="sub-heading">Difference between multi page and single page aplications</h2>
        <p className="description">
          In a single-page application, the content in the browser is changed almost exclusively by using JavaScript to modify a single HTML document. The browser is loading only a single page, and typically does not navigate away from that page. Often a single-page application is created by using a JavaScript framework such as Angular and React. An example of a website that implements this architecture is Instana.<br /><br />

          In a multi-page application, each section of the application is its own page which the browser must load individually. The pages might have dynamic JavaScript elements, but they are not responsible for handling transitions between different parts of the application. An example of a multi-page application website is Wikipedia.<br />

          The type of application that you have affects how Instana monitors that application.
        </p>
        <img
          // src={sas}
          src="https://via.placeholder.com/600x300"
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
