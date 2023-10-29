import React from 'react';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/Projects/Portfolio';
import Topbar from './components/topbar/Topbar';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
