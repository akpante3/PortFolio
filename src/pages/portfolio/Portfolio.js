import React from 'react';
import './Portfolio.scss';

function Portfolio() {
    const list = [
        {
            id:0,
            link: 'https://www.gfinityesports.com/',
            name: 'Gfinity',
            tech:['Vuejs', 'Vuex', 'SCSS', 'Typescript'],
            image: require('../../images/gfinity.png')
        },

        {
            id: 6,
            link: 'https://dashboard.flutterwave.com/',
            name: 'Flutterwave Rave',
            tech:['VueJS', 'Vuex', 'NodeJs','ExpressJs'],
            image: require('../../images/Rave-min.png')
        },

        {
            id:1,
            link: 'https://forza-tau.vercel.app/',
            name: 'Forza WEB',
            tech:['ReactJS', 'Firebase', 'SCSS'],
            image: require('../../images/forzaapp.png')
        },
       {
           id:2,
           link: 'https://dairynomics.netlify.app/',
           name: 'Darynomics',
           tech:['VueJS', 'Vuex', 'SCSS', 'NodeJ', 'Express'],
           image: require('../../images/Dairynomics-min.png')
       },
       {
            id:3,
            link: 'https://picture-grid-app.now.sh/',
            name: 'Picture Grid',
            tech:['VueJS', 'Vuex', 'Nuxt', 'SCSS'],
            image: require('../../images/grid_app-min.png')
        },
        {
            id:4,
            link: 'http://mouka-client-dev.tls-flutterwave.com/log-in',
            name: 'Expense management',
            tech:['VueJS', 'Vuex', 'SCSS', 'NodeJs'],
            image: require('../../images/mouka-expense.png')
        },
        {
            id: 6,
            link: 'https://www.signalalliance.com/',
            name: 'Signal Allaince',
            tech:['Wordpress', 'Javascript'],
            image: require('../../images/signal-allaince.png')
        },
        {
            id:7,
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
            <p className="portfolio__detail">Over the years, these are Outstanding Projects i have worked on</p>
            <div className="portfolio__project">
              <ProjectTemplate />
            </div>
            <span className="portfolio__view-more" ><a href="https://github.com/akpante3?tab=repositories" target="_blank">View More ...</a></span>
        </div>
    );
}

export default Portfolio;