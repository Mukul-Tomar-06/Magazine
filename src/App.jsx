// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Galary from './Galary'
import Contact from './Contact'
function App() {
 

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/galary' element={<Galary/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     

       
    </>
  )
}

export default App
