import React from 'react';
import PropTypes from 'prop-types';
import ScrollToPrevious from '@components/ScrollToPrevious';
import './style.scss';

const WorkExperiencePage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="work-experience-page" style={{ backgroundColor: bgPrimary }}>
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
        <h1 style={{ color: colorPrimary }}>WorkExperience</h1>
        <div className="work-experience-wrapper">
          <div className="work-experience-content" style={{ color: textPrimary }}>
            <h3>Freelance Developer Web Developer</h3>
            <p>Company Name: Online Jobs.ph</p>
            <p>Dates Employed 2015 – Present(Small Tasks Only)</p>
            <p>Duration: 6 yrs</p>
            <h3>Full-Stack Developer</h3>
            <p>Company name: Taktyl Studios</p>
            <p>Dates Employed Nov 2019 – Apr 2021</p>
            <p>Duration: 1 yr 6 mos</p>
            <h3>Frontend Developer</h3>
            <p>Company name: Gamesys</p>
            <p>Dates Employed Oct 2018 – Nov 2019</p>
            <p>Duration: 1 yr 2 mos</p>

            <h3>Web Developer</h3>
            <p>Company name: Wells Fargo</p>
            <p>Dates Employed Aug 2016 – Oct 2018</p>
            <p>Duration: 2 yrs 3 mos</p>
          </div>
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

WorkExperiencePage.contextTypes = {
  theme: PropTypes.any
};

export default WorkExperiencePage;
