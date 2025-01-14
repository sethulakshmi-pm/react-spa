import '../App.css';

import { Helmet } from 'react-helmet';
import apd_true from '../img/apd_true.png';
import enable_apd from '../img/enable_auto_detection_for_page_transitions.png';
import mpa_spa from '../img/mpa_spa.png';
import title_as_page_name from '../img/title_as_page_name.png';

const data = [
  {
    subHeading: 'Select the application framework used by your website',
    docHeading: 'Multi page and single page aplications',
    desc: 'In a single-page application, the content in the browser is changed almost exclusively by using JavaScript to modify a single HTML document. The browser is loading only a single page, and typically does not navigate away from that page. Often a single-page application is created by using a JavaScript framework such as Angular and React. An example of a website that implements this architecture is Instana. In a multi-page application, each section of the application is its own page which the browser must load individually. The pages might have dynamic JavaScript elements, but they are not responsible for handling transitions between different parts of the application. An example of a multi-page application website is Wikipedia.The type of application that you have affects how Instana monitors that application.',
    docLink: '',
    imgSrc: mpa_spa,
  },
  {
    subHeading: 'Enable auto detection for page transitions',
    desc: `Auto detection allows Instana to detect when users transition to a different part of the website without any code modification. If you disable page transition auto-detection, you will need to manually configure page transitions in the source code.`,
    docLink: '',
    imgSrc: enable_apd,
  },
  {
    subHeading: 'Select how page transitions are detected',
    docHeading: `'By page title' & 'By page URL'`,
    desc: `Instana's website monitoring automatically detects page changes for single - page web applications.This feature is supported since website JavaScript agent 1.7.1.Automatic page detection is used to track and record page transition events, and this feature is disabled by default.`,
    docLink: '',
    imgSrc: title_as_page_name,
    imgSrc2: apd_true,
  },
{
  subHeading: 'Enable regex mapping',
    // docHeading: `'By page title' & 'By page URL'`,
    desc: 'Creating regex mapping rules can transform URL patterns into meaningful names in the data that Instana collects about your website. Add mapping rules by specifying a regex pattern and the name you want to use for it.',
    imgSrc: title_as_page_name,
    imgSrc2: apd_true,
  }
]

const Blogs = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>BLOGS Page Title</title>
      </Helmet>
      <h1 className="main-heading">Auto Page Transition Detection</h1>
      <br />

      {data.map(d => (
        <section className="blog-section">
          <h2 className="sub-heading">{d.subHeading}</h2>
          {d.docHeading && <h3>{d.docHeading}</h3>}
          <p className="description">
            {d.desc}
          </p>
          {d.imgSrc && <img
            src={d.imgSrc}
            alt="Application framework used by your website"
            className="blog-image"
          />}
          {d.imgSrc2 && <img
            src={d.imgSrc2}
            alt="Application framework used by your website"
            className="blog-image"
          />}
        </section>
      ))}
    </div>
  );
};

export default Blogs;
