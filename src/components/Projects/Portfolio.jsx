import React from 'react';
import IMG1 from '../../Assets/Shine.png';
import IMG2 from '../../Assets/Rodan.png';
import IMG3 from '../../Assets/olx.png';
import IMG4 from '../../Assets/netmeds.png';

import './portfolio.css';

const Portfolio = () => {
  const teamProjects = [
    {
      id: 1,
      title: 'SHINE.COM',
      img: IMG1,
      description:
        'Shine.com connects jobseekers and recruiters by matching candidate profiles to the relevant job openings.'
        ,
      technologies: 'Tech Stack : HTML | CSS | JavaScript',
      link: 'https://shine-akash.netlify.app/',
      github: 'https://github.com/web-dev-akash/Team_Shine',
    },
    {
      id: 2,
      title: 'RODAN & FEILDS',
      img: IMG2,
      description:
        'Rodan & Fields is an American MLM Company specializing in skincare products.',
      technologies: 'Tech Stack :  HTML | CSS | JavaScript | JSON Server | Heroku ',
      link: 'https://effortless-kataifi-dd52d4.netlify.app/landingpage/landing',
      github: 'https://github.com/itsvikasdwivedi/Team-Rodan',
    },
    {
      id: 3,
      title: 'OLX.IN',
      img: IMG3,
      description: 'The OLX is a platform for buying and selling services and goods such as electronics, fashion items, furniture, household goods, cars and bikes.',
      technologies: 'React | Redux | JSON Server | Styled Components | ',
      link: 'https://olxclone-krishna123.netlify.app/',
      github: 'https://github.com/shivraj32644/Olx-Clone',
    },
    {
      id: 3,
      title: 'NETMEDS',
      img: IMG4,
      description: 'Netmeds is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India.',
      technologies: 'React | Redux | Javascript | React.js | Chakra UI | Redux | Mongo Db |  Express',
      link: 'https://netmeds-4.netlify.app/',
      github: 'https://github.com/Akshaypareek01/Netmeds_Full-stack',
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
