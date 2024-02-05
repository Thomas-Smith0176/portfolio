const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
        <div className="project-card-text">
        <h3>{project.name}</h3>
        <div className="project-card-blurb">
        <text>{project.blurb}</text>
        </div>
        </div>
        <img src={project.img} alt={project.alt} className="project-card-pic"/>
        </div>
    )
};

export default ProjectCard