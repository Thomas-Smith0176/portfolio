import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Project = () => {

    let {project} = useParams()
    if (project === 'api') {
        project = 'Express API'
    }

    return (
        <motion.main className="main__container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
        <section className="project">
        <div className="project-header">
        <h1>{project[0].toUpperCase() + project.slice(1)}</h1>
        {project === 'roam' && <h2>Discover, Expore, Share</h2>}
        {project === 'download' && <h2>User driven news</h2>}
        {project === 'Express API' && <h2>Fully developed back-end service</h2>}
        </div>
        </section>
        </motion.main>
    )
};

export default Project;