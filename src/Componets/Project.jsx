import { useParams } from "react-router-dom";

const Project = () => {

    let {project} = useParams()
    if (project === 'api') {
        project = 'Express API'
    }

    return (
        <section className="project">
        <div className="project-header">
        <h1>{project[0].toUpperCase() + project.slice(1)}</h1>
        {project === 'roam' && <h2>Discover, Expore, Share</h2>}
        {project === 'download' && <h2>User driven news</h2>}
        {project === 'Express API' && <h2>Fully developed back-end service</h2>}
        </div>
        </section>
    )
};

export default Project;