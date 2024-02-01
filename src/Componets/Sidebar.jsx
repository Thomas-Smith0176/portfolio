import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import ProjectCard from "./ProjectCard";
import roamPic from "../assets/roam-card-img.jpg"
import downloadPic from "../assets/download-card-img.jpg"
import apiPic from "../assets/api-card-img.jpg"
import homeIcon from "../assets/home-icon.png"

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

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
    <section className="sidebar-mobile">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <CiMenuBurger onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-header">
            <Link to="#" className="close-button">
              <IoCloseOutline onClick={showSidebar} />
            </Link>
          <div className="nav-menu-title">
            <h4>Personal Projects</h4>
          </div>
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
      </nav>
    </section>
  );
};

export default Sidebar;
