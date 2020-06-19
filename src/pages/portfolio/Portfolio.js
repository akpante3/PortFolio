import React from 'react';
import './Portfolio.scss';

function Portfolio() {
    const list = [
       {
           id:1,
           link: 'https://dairynomics.netlify.app/',
           name: 'Darynomics',
           tech:['VueJS', 'Vuex', 'SCSS', 'NodeJ', 'Express',],
           image: require('../../images/Dairynomics-min.png')
       },
       {
            id:2,
            link: 'https://picture-grid-app.now.sh/',
            name: 'Picture Grid',
            tech:['VueJS', 'Vuex', 'Nuxt', 'SCSS'],
            image: require('../../images/grid_app-min.png')
        },
        {
            id:3,
            link: 'https://akpante3.github.io/e-commerce-UI-UX/',
            name: 'ShopMate',
            tech:['UI/UX', 'Html', 'CSS3'],
            image: require('../../images/shopmate-min.png')
        },
        {
            id:4,
            link: 'https://github.com/akpante3/fast-food-fast',
            name: 'Fast Food Fast',
            tech:['ReactJS', 'NodeJs','ExpressJs'],
            image: require('../../images/fast-food.png')
        },
        {
            id: 5,
            link: 'https://dashboard.flutterwave.com/',
            name: 'Rave',
            tech:['VueJS', 'Vuex', 'NodeJs','ExpressJs'],
            image: require('../../images/Rave-min.png')
        },
        {
            id:6,
            link: 'https://event-management-app.now.sh/',
            name: 'Product',
            tech:['VueJS', 'UI/UX', 'CSS3'],
            image: require('../../images/events_1.png')
        },
    ]

    const ProjectTemplate = () => {
        return (
            list.map( data => (
                <div className="portfolio__project__image" key={data.id}>
                    <img src={data.image} alt="hello" />
                    <div className="portfolio__project__image__view">
                        <div className="tag tag--button tag--md"><a href={data.link} target='_blank'>View</a></div>
                    </div> 
                    <div className="portfolio__project__image__discription">
                        <div>
                            <div className="portfolio__project__image__discription__name">{data.name}</div>
                            <div className="tags">
                                {data.tech.map((data, index) => (<div className="tag tag--sm" key={index}>{data}</div>))}
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
            <p className="portfolio__detail">Over the years I have been actively involved working with distributed Engineering teams. These are some of my <span>Personal</span>  and <span>Team</span> projects i have contributed to.</p>
            <div className="portfolio__project">
              <ProjectTemplate />
            </div>
            <span className="portfolio__view-more" ><a href="https://github.com/akpante3?tab=repositories" target="_blank">View More ...</a></span>
        </div>
    );
}

export default Portfolio;