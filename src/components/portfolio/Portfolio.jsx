import React from 'react';
import IMG1 from '../../assets/film.png';
import IMG2 from '../../assets/nophoto.png'
import IMG3 from '../../assets/icard.png';
import IMG4 from '../../assets/guddi.png';
import IMG5 from '../../assets/bizzmatic.png';
import IMG6 from '../../assets/Miticket.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Film Review',
      img: IMG1,
      description:
        'Film review app that allows users to review movies, add movies.',
      technologies: 'React | Tailwind | Firebase ',
      link: 'https://cinemareview.vercel.app/',
      github: 'https://github.com/nupur-patel/react-project',
    },
    {
      id: 2,
      title: 'Stock Portfolio App',
      img: IMG2,
      description:
        'Stock Portfolio is APIs to manage stock portfolios of user and to manage capital gains and dividend yeild',
      technologies: 'Django | Django Rest Framework',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 6,
      title: 'MiTicket',
      img: IMG6,
      description:"Custom ticketing system designed and developed as per client's requirement.",
      technologies: 'Django | MySql | Celery ',
      github: 'https://github.com/nupur-patel/MiTicket',
    },
   
    {
      id: 4,
      title: 'Guddi',
      img: IMG4,
      description:
        'Guddi is a link compressor just like bitly but generates links based on a random english word from dictionary of a hash.',
      technologies: 'React | Firebase',
      github: 'https://github.com/nupur-patel/guddi',
    },
    {
      id: 5,
      title: 'BizzMatic',
      img: IMG5,
      description:'Landing Page for bizzMAtic',
      technologies: 'HTML | CSS | JavaScript',
      github: 'https://github.com/nupur-patel/BIZZMATIC',
    },
     
    {
      id: 3,
      title: 'i-card Managment',
      img: IMG3,
      description: 'i card generation system using user data and keep record of user',
      technologies: 'Python | Django',
      github: 'https://github.com/nupur-patel/Icard_Management',
    }, 
   
    
    

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
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
              { pro.link?
                <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>: ''
              }
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
