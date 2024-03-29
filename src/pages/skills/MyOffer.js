import React, { useEffect } from 'react';
import './MyOffer.scss';

function Skills() {
  useEffect(() => {
    console.log('mount')
  }, []);
  return (
    <div className="my-offer">
       <div className="my-offer__header"><img src={require('../../images/offer.svg')} alt="portfolio" />MY OFFER</div>
       <div className="portfolio__detail">A front-end software engineer with over 5 years of experience.</div>
       <div>I have worked with several distributed teams to maintain, develop, and launch multiple projects, being involved in both backend and front-end development.</div>
       <br />
       <div>My current toolset includes Vue, Vuex, Nodejs, Express, React, Redux, TypeScript, Docker, AWS and all the other various frameworks, libraries and technologies related to them</div>
       <br />
       <div>I can help you with all the sides of your project:</div>
       <ul>
          <li>verifying good UI/UX design,</li>
          <li>mentoring the team,</li>
          <li>estimating tasks,</li>
          <li>researching possible techs,</li>
       </ul>
      <div>
          <div className="my-offer__header--sub-header"><img src={require('../../images/userInterface.svg')} alt="portfolio" />FRONT-END ENGINEER</div>
          <div className="line"></div>
          <div>I specialize in applications written in both React and Vue. other include Angular, TypeScript.</div>
          <br />
          <div>My current experience and skills in front-end include:</div>
          <ul>
            <li>good sense of design and UX,</li>
            <li>solid experience in almost all of the JS ecosystems, by having used in the past many libraries like Nuxt.js, Next.js, React, Redux, RxJS, Angular, Vuex, Vue, jQuery, Lodash/Underscore and many etc</li>
            <li>writing unit and e2e tests</li>
            <li>full integration of front-end development using tools like Webpack, multiple environment support, CI/CD, automated testing, server-side render and visual snapshots.</li>
            <li>refactoring existing applications</li>
          </ul>
       </div>
       <div>
            <div className="my-offer__header--sub-header"><img src={require('../../images/backend.svg')} alt="portfolio" />BACK-END ENGINEER</div>
            <div className="line"></div>
            <p>In the back-end, I specialize in NodeJS with frameworks like Express and AdonisJS. alternatively, I also skilled in python</p>
            <div>My current experience and skills in back-end include:</div>
            <ul>
              <li>cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers</li>
              <li>using different types of databases (like PostgreSQL, MySQL, Elasticsearch, MongoDB, Redis)</li>
              <li>refactoring existing applications</li>
              <li>writing unit tests</li>
            </ul>        
       </div> 
       <div>
            <div className="my-offer__header--sub-header"><img src={require('../../images/others.svg')} alt="portfolio" />DEV-OPS, DESIGN, UI, PROJECT LEADERSHIP, TEAM MENTORSHIP</div>
            <div className="line"></div>
            <div>Thus, not only I have coded their back-end and front-end codebases, but often I also been invovled in planning and all other aspects of the project:</div>
            <ul>
              <li>project management and planning skills</li>
              <li>i am a certified AWS solution architure</li>
              <li>experience with launching, deployment and monitoring applications(AWS, Heroku, now.sh etc..)</li>
              <li>code reviews, onboarding and mentoring team members</li>
            </ul>        
       </div>
       {/* DEV-OPS, DESIGN, UI, PROJECT LEADERSHIP, TEAM MENTORSHIP */}
    </div>
  );
}

export default Skills;