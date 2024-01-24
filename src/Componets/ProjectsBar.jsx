import { Link } from "react-router-dom";

const ProjectsBar = () => {
  return (
    <div class="sidebar">
      <h4>Personal Projects</h4>
      <Link to={'/projects/roam'}>
        <div>Roam</div>
      </Link>
      <Link to={'/projects/download'}>
        <div>Download News</div>
      </Link>
      <Link to={'/projects/api'}>
        <div>Express API</div>
      </Link>
      <Link to={'/'}>
        <div>Home</div>
      </Link>
    </div>
  );
};

export default ProjectsBar;
