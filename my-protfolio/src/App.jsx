
import './App.css'
import HiSession from './pages/HiSession'
import Navbar from './pages/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Skill from './pages/Skill'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Abaout from './pages/About'



function App() {


  return (


    <>
    <Navbar/>
    <HiSession/>
    <Abaout/>
    <Skill/>
    <Project/>
    <Resume/>
    <Footer/>
    
    
   

    </>
  )
}

export default App
