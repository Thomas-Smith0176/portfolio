import linkedin from '../assets/linkedin-logo.png'
import github from '../assets/github-logo.png'
import email from '../assets/email-icon.png'
import phone from '../assets/phone-icon.png'

const ContactCard = () => {
    return (
        <>
        <div className='contact-info'> 
            <img src={linkedin} alt="linkedin icon" className='linkedin-icon'/>
            <text className='linkedin-text'>www.linkedin.com/in/tom-smith-2192361b7</text>
            <img src={github} alt="github icon" className='github-icon'/>
            <text className='github-text'>https://github.com/Thomas-Smith0176</text>
            <img src={email} alt="email icon" className='email-icon'/>
            <text className='email-text'>thomas_smith@talktalk.net</text>
            <img src={phone} alt="phone icon" className='phone-icon'/>
            <text className='phone-text'>07397337006</text>
        </div>
            <div className='contact-icons'>
            <img src={linkedin} alt="linkedin icon" className='contact-icon'/>
            <img src={github} alt="github icon" className='contact-icon'/>
            <img src={email} alt="email icon" className='contact-icon'/>
            <img src={phone} alt="phone icon" className='contact-icon'/>
            </div>
        </>
    )
};

export default ContactCard;