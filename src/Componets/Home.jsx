import { motion } from "framer-motion";
import ContactCard from './ContactCard';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <motion.main className="main__container"
        initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{duration: 1.3,ease: [0.6, -0.05, 0.01, 0.99]}}>
        <section className="home">
        <div className="home-header">
        <Header/>
        <Sidebar/>
        </div>
        <ProfileCard/>
        <ContactCard/>
        </section>
        </motion.main>
    )
};

export default Home;