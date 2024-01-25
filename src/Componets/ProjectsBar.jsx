import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import roamPic from "../assets/roam-card-img.jpg"

const ProjectsBar = () => {

  const roam = {
    name: "Roam",
    img: roamPic,
    alt: "screenshot of roam app showing a partially uncovered map with points of interest markers"
  }


  return (
    <div class="sidebar">
      <h4>Personal Projects</h4>
      <Link to={'/projects/roam'}>
        <ProjectCard project={roam}/>
      </Link>
      <Link to={'/projects/download'}>
        <ProjectCard project={'Download'}/>
      </Link>
      <Link to={'/projects/api'}>
        <ProjectCard project={'Express API'}/>
      </Link>
      <Link to={'/'}>
        <div>Home</div>
      </Link>
    </div>
  );
};

export default ProjectsBar;
