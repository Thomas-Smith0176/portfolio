import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import roamPic from "../assets/roam-card-img.jpg"
import downloadPic from "../assets/download-card-img.jpg"
import apiPic from "../assets/api-card-img.jpg"

const ProjectsBar = () => {

  const roam = {
    name: "Roam",
    img: roamPic,
    alt: "screenshot of roam app showing a partially uncovered map with points of interest markers"
  }

  const download = {
    name: 'Download',
    img: downloadPic,
    alt: "screenshot of download news site showing a grid view of articles sorted into the coding category"
  }

  const api = {
    name: 'Express API',
    img: apiPic,
    alt: "screenshot showing api endpoints and their example responses"
  }


  return (
    <div className="sidebar">
      <h4>Personal Projects</h4>
      <Link to={'/projects/roam'}>
        <ProjectCard project={roam}/>
      </Link>
      <Link to={'/projects/download'}>
        <ProjectCard project={download}/>
      </Link>
      <Link to={'/projects/api'}>
        <ProjectCard project={api}/>
      </Link>
      <Link to={'/'}>
        <div>Home</div>
      </Link>
    </div>
  );
};

export default ProjectsBar;
