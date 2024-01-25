
const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
        <h1>{project.name}</h1>
        <img src={project.img} alt={project.alt}/>
        </div>
    )
};

export default ProjectCard