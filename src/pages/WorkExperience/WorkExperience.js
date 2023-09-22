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
            <h3>Summary of Skills</h3>
            <ul>
<li>HTML, JavaScript, TypeScript, CSS, SASS, MySql, PostgreSql, GraphQl</li>
<li>VueJs, ReactJs, JQuery, Flutter</li>
<li>Vuex, Redux</li>
<li>Axios, Ajax</li>
<li>Bootstrap, TailwinCSS, ElementUI, Ant Design, Material UI</li>
<li>Laravel, Koa, AdonisJs</li>
<li>Fixer.io, ZoomAPI, Stripe</li>
<li>Wordpress</li>
<li>VSCode, Sublime</li>
<li>Git, Docker</li>
<li>Github, Gitlab, Bitbucket</li>
<li>Jira,Trello</li>
<li>Figma, Sketch</li>
<li>Agile Scrum</li>
<li>Google Analytics, Google Tag Manager</li>
<li>Microservices, MicrofrontEnd, SPA</li>
</ul>

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
