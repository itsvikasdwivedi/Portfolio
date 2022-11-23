import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/itsvikasdwivedi" target="_blank" rel="noreferrer" >  <BsLinkedin /></a>
      <a href="https://github.com/itsvikasdwivedi" target="_blank" rel="noreferrer" ><FaGithubSquare /></a>
      <a href="https://twitter.com/itsvikasdwivedi" target="_blank" rel="noreferrer" ><AiFillTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials;