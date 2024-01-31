import { useState } from 'react';
import {Navbar , Header , Features,ChooseRicoz,Skills,Testimonials,WorkFlow,ContactForm,Footer} from './container';




function App() {

  return (
 <div className="app">
  <Navbar/>
  <Header/>
  <Features/>
  <ChooseRicoz/>
  <Skills/>
  <Testimonials/>
  <WorkFlow/>
  <ContactForm/>
  <Footer/>
 </div>
  )
}

export default App
