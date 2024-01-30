const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
        <img src={project.img} alt={project.alt} className="project-card-pic"/>
        <div className="project-card-text">
        <h3>{project.name}</h3>
        <div className="project-card-blurb">
        {/* <h5>{project.subtitle}</h5> */}
        <text>{project.blurb}</text>
        </div>
        </div>
        </div>
    )
};

export default ProjectCard