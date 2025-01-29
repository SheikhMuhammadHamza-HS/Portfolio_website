import React from 'react'
import Hero from './components/hero';
import Contact from "./components/Contact"
import Project from './components/project';
import About from './components/about';
import Skill from "./components/skill"



const Home = () => {
  return (
    <div>
          <Hero/>
          <About/>
          <Skill/>
          <Project/>
          <Contact/>
          
    </div>
  )
  
}

export default Home;
