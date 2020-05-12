import React from 'react';
import './Portfolio.scss';

function Portfolio() {
    const list = [
       {
           name: 'SHOPMATE',
           tech:['React', 'Redux', 'SCSS'],
           image: require('../../images/project_1.jpg')
       },
       {
            name: 'PICTURE GRID',
            tech:['Vue', 'Vuex', 'Nuxt', 'SCSS'],
            image: require('../../images/grid_app.png')
        },
        {
            name: 'JAVASCRIPT EDITOR',
            tech:['Node.js', 'Express.js', 'Html'],
            image: require('../../images/code_editor.png')
        },
        {
            name: 'Events',
            tech:['UI/UX', 'Vue', 'SCSS'],
            image: require('../../images/events_1.png')
        }
    ]

    const ProjectTemplate = () => {
        return (
            list.map((data) => (
                <div className="portfolio__project__image">
                    <img src={data.image} alt="hello" />
                    <div className="portfolio__project__image__view">
                        <div className="tag tag--button tag--md">View</div>
                    </div> 
                    <div className="portfolio__project__image__discription">
                        <div>
                            <div className="portfolio__project__image__discription__name">{data.name}</div>
                            <div className="tags">
                                {data.tech.map(data => (<div className="tag tag--sm">{data}</div>))}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className="portfolio">
            <div className="portfolio__header">
                <img src={require('./portfolio.svg')} alt="portfolio" />PORTFOLIO
            </div>
            <div className="portfolio__detail">All projects here were created by me from scratch both frontend and backend.</div>
            <div className="portfolio__project">
              <ProjectTemplate />
            </div>
            <span><a href="https://github.com/akpante3?tab=repositories" target="_blank">View More</a></span>
        </div>
    );
}

export default Portfolio;