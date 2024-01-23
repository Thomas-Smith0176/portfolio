import { Link } from 'react-router-dom';
import profilePic from '../assets/PXL_20230907_113302816.jpg'

const Header = () => {
    return (
        <section className="header">
        <h1>Tom Smith - Junior Software Developer Portfolio</h1>
        <img src={profilePic} className="profilePic" alt='Tom Smith Profile Picture'/>
            <Link to={'/'}>
        <button>Home</button>
            </Link>
        </section>
    )
}

export default Header; 