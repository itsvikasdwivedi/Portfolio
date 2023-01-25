import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../Assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>DSA</h5>
              <small>460+ Problems on OJ</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
          </div>
          <p>A Full Stack Web Developer who is passionate about making open-source more accessible, creating technology more accessible, and building community.
            I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript,React JS, Chakra-UI,MAterial-UI , MongoDb, NodeJS and many more, building everything from landing pages to APIs.</p>
          <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
      </div>
    </section>
  )
}

export default Intro