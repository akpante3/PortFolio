import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="portfolio__header">
            Portfolio
        </div>
        <div className="portfolio__detail">All projects here were <bold>created by me from scratch</bold> both frontend and backend.</div>
        <div className="portfolio__project">
            <div className="portfolio__project__image">
                <img src={require('./project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                    <button className="btn btn--sm">View</button>
                </div> 
                <div className="portfolio__project__image__discription">
                    <div className="portfolio__project__image__discription__name">SHOPMATE</div>
                    <div className="portfolio__project__image__discription__tags">
                       <div className="portfolio__project__image__discription__tags"></div>
                    </div>
                </div>
            </div>
            <div className="portfolio__project__image">
                <img src={require('./project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                <button className="btn btn--sm">View</button></div> 
            </div>
            <div className="portfolio__project__image">
                <img src={require('./project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                <button className="btn btn--sm">View</button></div> 
            </div>
            <div className="portfolio__project__image">
                <img src={require('./project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                <button className="btn btn--sm">View</button></div> 
            </div>
        </div>
    </div>
  );
}

export default Portfolio;