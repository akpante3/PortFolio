import React from 'react';
import './Portfolio.scss';

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="portfolio__header">
            <img src={require('./portfolio.svg')} alt="portfolio" />PORTFOLIO
        </div>
        <div className="portfolio__detail">All projects here were created by me from scratch both frontend and backend.</div>
        <div className="portfolio__project">
            <div className="portfolio__project__image">
                <img src={require('../../images/project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                    <div className="tag tag--button tag--md">View</div>
                </div> 
                <div className="portfolio__project__image__discription">
                    <div>
                        <div className="portfolio__project__image__discription__name">SHOPMATE</div>
                        <div className="tags">
                            <div className="tag tag--sm">React</div>
                            <div className="tag tag--sm">Redux</div>
                            <div className="tag tag--sm">FrontEnd</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio__project__image">
                <img src={require('../../images/project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                    <div className="tag tag--button tag--md">View</div>
                </div> 
                <div className="portfolio__project__image__discription">
                    <div>
                        <div className="portfolio__project__image__discription__name">SHOPMATE</div>
                        <div className="tags">
                            <div className="tag tag--sm">React</div>
                            <div className="tag tag--sm">Redux</div>
                            <div className="tag tag--sm">FrontEnd</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio__project__image">
                <img src={require('../../images/project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                    <div className="tag tag--button tag--md">View</div>
                </div> 
                <div className="portfolio__project__image__discription">
                    <div>
                        <div className="portfolio__project__image__discription__name">SHOPMATE</div>
                        <div className="tags">
                            <div className="tag tag--sm">React</div>
                            <div className="tag tag--sm">Redux</div>
                            <div className="tag tag--sm">FrontEnd</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio__project__image">
                <img src={require('../../images/project_1.jpg')} alt="hello" />
                <div className="portfolio__project__image__view">
                    <div className="tag tag--button tag--md">View</div>
                </div> 
                <div className="portfolio__project__image__discription">
                    <div>
                        <div className="portfolio__project__image__discription__name">SHOPMATE</div>
                        <div className="tags">
                            <div className="tag tag--sm">React</div>
                            <div className="tag tag--sm">Redux</div>
                            <div className="tag tag--sm">FrontEnd</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;