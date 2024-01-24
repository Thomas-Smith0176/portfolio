
import ContactCard from './ContactCard';
import Header from './Header';
import ProfileCard from './ProfileCard';

const Home = () => {
    return (
        <section className="home">
        <Header/>
        <ProfileCard/>
        <ContactCard/>
        </section>
    )
};

export default Home;