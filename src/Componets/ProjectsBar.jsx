import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import roamPic from "../assets/roam-card-img.jpg"
import downloadPic from "../assets/download-card-img.jpg"
import apiPic from "../assets/api-card-img.jpg"

const ProjectsBar = () => {

  const roam = {
    name: "Roam",
    subtitle: "Discover, Explore, Share",
    img: roamPic,
    alt: "screenshot of roam app showing a partially uncovered map with points of interest markers",
    blurb: "Roam is a unique maps app designed to enourage users to explore and engade with their local area by implementing game-like features."
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
    blurb: "Built using Express and the MVC design pattern, this API is designed to handle requests to a large news database."
  }


  return (
    <div className="sidebar">
      <h4>Personal Projects</h4>
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
        <div>Home</div>
      </Link>
    </div>
  );
};

export default ProjectsBar;
