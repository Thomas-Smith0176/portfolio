import { motion } from "framer-motion";

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
        </section>
        </motion.main>
    )
};

export default RoamPage;