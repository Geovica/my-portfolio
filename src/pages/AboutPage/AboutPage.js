import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I am a self taught <span className="highlight">Full Stack Developer</span> and
              a <span className="highlight">Eutress Seeker</span>
            </p>
            <p>
              I work as a
              <span className="highlight"> freelancer</span>, accepting short term projects only. I always want to explore different types of programming languages and tools in web development.
            </p>
            <p>
              I built this site <span className="highlight">from scratch</span>.
              By scratch, I mean <i>absolutely from scratch</i>{' '}
              <span className="highlight">
              using ReactJs
              </span>{' '}
              and had so much fun along the way.
            </p>
            <p>
              Laravel,Reactjs, Vuejs,  Node.js, Git, Docker and AWS
             are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
