import Footer from './Footer';

import {useEffect} from 'react';
import {Helmet} from 'react-helmet';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - CovidTracky</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        <h2 className="lineheight">
          Hello, Welcome to <a href="./">CovidTracky</a> an alternative to{' '}
          <a href="https://covid19india.org/">covid19india.org</a>. This website
          aims to provide you the latest and the most accurate data for covid19
          cases. I do this because it affects all of us. Today its someone else
          who is getting infected; tomorrow it could be me, who knows. We need
          to prevent the spread of the virus. We need to document the data so
          that people with knowledge can use this data to make informed
          decision.
        </h2>
        <br />
        <h2 className="lineheight">
          The data for covid19 cases is provided by{' '}
          <a href="https://api.covid19tracker.in/data/static/data.min.json">
            The Indian Institute Of Hydrebad
          </a>{' '}
          used for getting updated covid19 cases.
        </h2>
        <br />
        <br />
        <h2>Who are you ?</h2>
        <br />
        <h2 className="answer">
          I am a 14 years old developer who wants to be the best developer on
          this planet. I maintain and made this website ( using the source of
          covid19india.org ). Thanks to covid19india.org team for their
          outstanding work in creating the original portal, and for making their
          code base public
        </h2>
      </div>

      <Footer />
    </>
  );
}

export default About;
