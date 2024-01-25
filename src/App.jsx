import './App.css'
import Header from './Componets/Header'
import Home from './Componets/Home'
import { Routes, Route, useLocation } from 'react-router-dom';
import Project from './Componets/Project';
import ProjectsBar from './Componets/ProjectsBar';
import background from './assets/dark-background.jpg'
import { AnimatePresence } from "framer-motion";
import RoamPage from './Componets/RoamPage';
import DownloadPage from './Componets/DownloadPage';
import ApiPage from './Componets/ApiPage';

function App() {
  const location = useLocation();

  return (
    <>
      <ProjectsBar/>
    <main>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/roam" element={<RoamPage/>}/>
      <Route path="/projects/download" element={<DownloadPage/>}/>
      <Route path="/projects/api" element={<ApiPage/>}/>
      {/* <Route path="/projects/:project" element={<Project/>}/> */}
      </Routes>
      </AnimatePresence>
      <img src={background} className='bg-img'/>
    </main>
    </>
  )
}

export default App
