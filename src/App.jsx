import './App.css'
import Header from './Componets/Header'
import Home from './Componets/Home'
import { Routes, Route } from 'react-router-dom';
import Project from './Componets/Project';
import ProjectsTab from './Componets/ProjectsTab';
import background from './assets/dark-background.jpg'

function App() {

  return (
    <main>
      <Header/>
      <ProjectsTab/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/:project_id" element={<Project/>}/>
      </Routes>
      <img src={background} className='bg-img'/>
    </main>
  )
}

export default App
