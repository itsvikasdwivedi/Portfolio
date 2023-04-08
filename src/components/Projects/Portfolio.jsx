import React from 'react';
import IMG1 from '../../Assets/Rodan.png';
import IMG2 from '../../Assets/olx.png';
import IMG3 from '../../Assets/netmeds.png';
import IMG4 from '../../Assets/crypto.png';
import IMG5 from '../../Assets/weather.png';
import './portfolio.css';


const Portfolio = () => {
  const teamProjects = [
    {
      id: 1,
      title: 'RODAN & FEILDS',
      img: IMG1,
      description:
        'Rodan & Fields is an American MLM Company specializing in skincare products.',
      technologies: 'Tech Stack :  HTML | CSS | JavaScript | JSON Server | Heroku ',
      link: 'https://rodan-clone.netlify.app/',
      github: 'https://github.com/itsvikasdwivedi/Team-Rodan',
    },
    {
      id: 2,
      title: 'OLX.IN',
      img: IMG2,
      description: 'The OLX is a platform for buying and selling services and goods such as electronics, fashion items, furniture, household goods, cars and bikes.',
      technologies: 'Tech Stack : React | Redux | JSON Server | Styled Components | ',
      link: 'https://olx-clone-by-team-olx.netlify.app/',
      github: 'https://github.com/shivraj32644/Olx-Clone',
    },
    {
      id: 3,
      title: 'NETMEDS',
      img: IMG3,
      description: 'Netmeds is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices.',
      technologies: ' Tech Stack : React | Redux | Javascript | React.js | Chakra UI | Redux | Mongo Db |  Express',
      link: 'https://netmeds-4.netlify.app/',
      github: 'https://github.com/Akshaypareek01/Netmeds_Full-stack',
    },
    {
      id: 4,
      title: 'Crypto App',
      img: IMG4,
      description: 'App where user can get all the information about their favorite crypto currencies',
      technologies: 'Tech Stack : React | Redux | React-Chart Js | Material UI ',
      link: 'https://crypto-bhaskar.netlify.app/',
      github: 'https://github.com/itsvikasdwivedi/Crypto-App'
    },
    {
      id: 5,
      title: 'Weather App',
      img: IMG5,
      description: 'Weather App where user can get real time data of their current location or specified location',
      technologies: 'Tech Stack : React | React Animated Weather | Weather API',
      link: 'https://jazzy-starship-b83aef.netlify.app/',
      github: 'https://github.com/itsvikasdwivedi/Weather-App'
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {teamProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3 >{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
