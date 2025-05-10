import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Contact from './components/contact'
import AboutMe from './components/about_me'
import Courses from './components/courses'
import Internship from './components/internship'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <section id="about_me" className="scroll-mt-16">
        <AboutMe />
      </section>
      <section id="contact" className="scroll-mt-13">
        <Contact />
      </section>
      <section id="courses" className="scroll-mt-13">
        <Courses />
      </section>
      <section id="internship" className="scroll-mt-13">
        <Internship />
      </section>
      <section id="projects" className="scroll-mt-13" >
        <Projects />
      </section>
      <Footer/>
    </>
  );
}

export default App
