import './App.css'
import Header from './Componets/Header'
import Home from './Componets/Home'
import { Routes, Route, useLocation } from 'react-router-dom';
import Project from './Componets/Project';
import ProjectsBar from './Componets/ProjectsBar';
import background from './assets/dark-background.jpg'
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <ProjectsBar/>
    <main>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/:project" element={<Project/>}/>
      </Routes>
      </AnimatePresence>
      <img src={background} className='bg-img'/>
    </main>
    </>
  )
}

export default App
