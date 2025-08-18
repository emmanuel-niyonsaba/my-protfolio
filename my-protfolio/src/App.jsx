
import './App.css'
import HiSession from './pages/HiSession'
import Navbar from './pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Skill from './pages/Skill'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Abaout from './pages/About'



function App() {


  return (

    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar />}></Route>
      <Route path='/about' element={<Abaout />}></Route>
      <Route path='/skills' element={<Skill />}></Route>
      <Route path='/project' element={<Project />}></Route>
      <Route path='/resume' element={<Resume />}></Route>
      <Route path='/footer' element={<Footer />}></Route>
     </Routes>   
     
      <HiSession />
      <Abaout />
      <Skill />
      <Project />
      <Resume />
      <Footer />
     </BrowserRouter>




    </>
  )
}

export default App
