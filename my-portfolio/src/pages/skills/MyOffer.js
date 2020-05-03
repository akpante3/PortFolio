import React from 'react';
import './MyOffer.scss';

function Skills() {
  return (
    <div className="my-offer">
       <div className="my-offer__header"><img src={require('../../images/icons/offer.svg')} alt="portfolio" />MY OFFER</div>
       <div className="portfolio__detail">A full-stack software engineer with over 3 years of experience.</div>
       <div>I have worked with several distributed teams to maintain, develope and launch multiple projects, being involved in both backend and front-end development.</div>
       <br />
       <div>My current toolset includes Vue, Vuex, Nodejs, Express, React, Redux, Angular, TypeScript, Docker, AWS and all the other various frameworks, libraries and technologies related to them</div>
       <br />
       <div>I can help you with all the sides of your project:</div>
       <ul>
          <li>verifying good UI/UX design,</li>
          <li>leading/co-developing the back-end and front-end,</li>
          <li>setting up the CI/CD,</li>
          <li>mentoring the team,</li>
          <li>estimating tasks,</li>
          <li>researching possible techs,</li>
          <li>leading, launching and monitoring the project.</li>
       </ul>
      <div>
          <div className="my-offer__header--sub-header"><img src={require('../../images/icons/userInterface.svg')} alt="portfolio" />FRONT-END ENGINEER</div>
          <div className="line"></div>
          <div>I specialize in applications written in both React and Angular. Recently I became also a huge fan of one-way data flow and Redux-like architecture and also typed languages, e.g. TypeScript.</div>
          <br />
          <div>My current experience and skills in front-end includes:</div>
          <ul>
            <li>good sense of design and UX,</li>
            <li>full integration of front-end development using tools like Webpack with features like automatic code reload, code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render and visual snapshots,</li>
            <li>huge experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Redux-Observable, RxJS, Angular, Ionic Framework, Backbone, jQuery, Lodash/Underscore and many else</li>
            <li></li>
          </ul>
       </div>
       <div>
            <div className="my-offer__header--sub-header"><img src={require('../../images/icons/offer.svg')} alt="portfolio" />BACK-END ENGINEER</div>
            <div className="line"></div>
            <div>In the back-end, I specialize in  NodeJS with framework like Express and AdonisJS. alternatively, i also skilled in python</div>
            <div>My current experience and skills in front-end includes:</div>
            <ul>
              <li>cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers</li>
              <li>using different types of databases (like PostgreSQL, MySQL, Elasticsearch, MongoDB, Redis)</li>
              <li>refactoring existing applications, by improving code readibility, separating concerns into separate functions/classes/modules, taking the business logic out from your request/response layer into separate modules (DDD), and moving the app architecture into an event-based one</li>
              <li>writing unit and e2e tests</li>
            </ul>        
       </div>
       <div>
            <div className="my-offer__header--sub-header">DEV-OPS, DESIGN, UI, PROJECT LEADERSHIP, TEAM MENTORSHIP</div>
            <div className="line"></div>
            <div>Thus, not only I have coded their back-end and front-end codebases, but often I also had to care about other things needed in a successful web application project:</div>
            <div>My current experience and skills in front-end includes:</div>
            <ul>
              <li>good planning of UI and thinking how it affects the UX;</li>
              <li>i am a certified AWS solution architure;</li>
              <li>launching, deployment and monitoring the app after the release;</li>
              <li>code reviews, onboarding and mentoring team members;</li>
            </ul>        
       </div>
       {/* DEV-OPS, DESIGN, UI, PROJECT LEADERSHIP, TEAM MENTORSHIP */}
    </div>
  );
}

export default Skills;