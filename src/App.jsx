import { useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'

function App() {
  
  const about=useRef(null);
  const portfolio=useRef(null);
  const contact=useRef(null);

  function moveTo(element)
  {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: 'smooth'
    }
    )
  }

  console.log('about',about);

  return (
    <>
     <Header func={moveTo} about={about} portfolio={portfolio} contact={contact}/>
     <div id='about' ref={about}>
        <About />
     </div>
     <div id='portfolio' ref={portfolio}>
        <Portfolio />
     </div>
     <div id='contact' ref={contact}>
       <Contact />
     </div>
     
    </>
  )
}

export default App
