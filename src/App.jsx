import './App.css'
import Header from './Componets/Header'
import Home from './Componets/Home'
import { Routes, Route } from 'react-router-dom';
import Project from './Componets/Project';
import ProjectsBar from './Componets/ProjectsBar';
import background from './assets/dark-background.jpg'

function App() {

  return (
    <>
      <ProjectsBar/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/:project" element={<Project/>}/>
      </Routes>
      <img src={background} className='bg-img'/>
    </main>
    </>
  )
}

export default App
