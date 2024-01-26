import { motion } from "framer-motion";
import Accordion from "./Accordion";

const RoamPage = () => {
    return (
        <motion.main className="main__container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
        <section className="project">
        <div className="project-header">
        <h1>Roam</h1>
        <h2>Discover, Expore, Share</h2>
        </div>
        <div className="project-body">
        <text>
        People don’t engage with their local areas as much as they used to. In our cities and towns, there are hundreds of hidden landmarks, buildings and monuments that enrich the cultural canvas of our communities.
Roam is designed to tackle this problem by implementing game-like features to encourage users to explore and interact with their local area. 
        </text>
            <Accordion title={'App features'} content={ 
            <ul>
                <li>Dynamic map screen which expands and reveals as users explore.</li>
                <li>Custom points of interest 'landmarks' which users can create and discover.</li>
                <li>Funcionality for users to upload photos and post comments on existing landmarks.</li>
                <li>Landmarks restrict interaction if users are not within a certain distance, encouraging exploration.</li>
            </ul>
        }/>
        </div>
        </section>
        </motion.main>
    )
};

export default RoamPage;