import { Link, useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import roamPic from "../assets/roam-card-img.jpg"
import downloadPic from "../assets/download-card-img.jpg"
import apiPic from "../assets/api-card-img.jpg"
import homeIcon from "../assets/home-icon.png"

const ProjectsBar = () => {

  const roam = {
    name: "Roam",
    subtitle: "Discover, Explore, Share",
    img: roamPic,
    alt: "screenshot of roam app showing a partially uncovered map with points of interest markers",
    blurb: "Roam is a unique maps app designed to encourage users to explore and engage with their local area by implementing game-like features."
  }

  const download = {
    name: 'Download',
    subtitle: 'User driven news',
    img: downloadPic,
    alt: "screenshot of download news site showing a grid view of articles sorted into the coding category",
    blurb: "Download is a front-end design for a social media/news site built using React."
  }

  const api = {
    name: 'Express API',
    subtitle: 'Fully developed back-end service',
    img: apiPic,
    alt: "screenshot showing api endpoints and their example responses",
    blurb: "An API built using Express and the MVC design pattern, designed to handle requests to a large news database."
  }


  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <Link to={'/'}>
        <img src={homeIcon} className="home-icon"/>
      </Link>
      <h4>Personal Projects</h4>
      </div>
      <div className="sidebar-projects">
      <Link to={'/projects/roam'} className="link">
        <ProjectCard project={roam}/>
      </Link>
      <Link to={'/projects/download'} className="link">
        <ProjectCard project={download}/>
      </Link>
      <Link to={'/projects/api'} className="link">
        <ProjectCard project={api}/>
      </Link>
      <Link to={'/'}>
        <img src={homeIcon} className="home-icon-column"/>
      </Link>
      </div>
    </div>
  );
};

export default ProjectsBar;
