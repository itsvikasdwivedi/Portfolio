import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai'

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Thanks For Visiting ❤️</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/itsvikasdwivedi" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/itsvikasdwivedi" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/itsvikasdwivedi" target="_blank" rel="noreferrer" ><AiFillTwitterSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Made with ❤️ by Vikas Dwivedi , 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer