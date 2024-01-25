import { motion } from "framer-motion";

const ApiPage = () => {
    return (
        <motion.main className="main__container"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
        <section className="project">
        <div className="project-header">
        <h1>Express API</h1>
        <h2>Fully developed back-end service</h2>
        </div>
        </section>
        </motion.main>
    )
};

export default ApiPage; 