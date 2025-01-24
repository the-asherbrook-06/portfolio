import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

import "./style/App.css"
import "./style/colors.css"

function App() {
  return (
    <>
        <Header></Header>
        <content>
          <Hero id="home"></Hero>
          <Skills></Skills>
          <Projects></Projects>
          <Footer></Footer>
        </content>
    </>
  )
}

export default App
