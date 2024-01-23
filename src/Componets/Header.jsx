import { Link } from 'react-router-dom';
import profilePic from '../assets/profilePicture.jpg'

const Header = () => {
    return (
        <section className="header">
        <div className='headerText'>
        <h1>Tom Smith</h1>
        <h2>Junior Software Developer Portfolio</h2>
        </div>
        <div className='imageCropper'>
        <img src={profilePic} className="profilePic" alt='Tom Smith Profile Picture'/>
        </div>
        </section>
    )
}

export default Header; 