import linkedin from '../assets/linkedin-logo.png'
import github from '../assets/github-logo.png'
import email from '../assets/email-icon.png'
import phone from '../assets/phone-icon.png'
import { Link } from '@react-email/link'

const ContactCard = () => {
    return (
        <>
        <div className='contact-info'> 
            <img src={linkedin} alt="linkedin icon" className='linkedin-icon'/>
            <a href='https://linkedin.com/in/tom-smith-2192361b7' target='_blank' className='linkedin-text'>
            <text >www.linkedin.com/in/tom-smith-2192361b7</text>
            </a>
            <img src={github} alt="github icon" className='github-icon'/>
            <a href="https://github.com/Thomas-Smith0176" target="_blank" className='github-text'   >
            <text>https://github.com/Thomas-Smith0176</text>
            </a>
            <img src={email} alt="email icon" className='email-icon'/>
            <a href='mailto:thomasrobsmith@gmail.com' target='_blank' className='email-text'>
            <text >thomasrobsmith@gmail.com</text>
            </a>
            <img src={phone} alt="phone icon" className='phone-icon'/>
            <a href='tel:+4407397337006' className='phone-text'>
            <text className='phone-text'>07397337006</text>
            </a>
        </div>
            <div className='contact-icons'>
                <a href="https://linkedin.com/in/tom-smith-2192361b7" target='_blank'>
            <img src={linkedin} alt="linkedin icon" className='contact-icon'/>
                </a>
                <a href="https://github.com/Thomas-Smith0176" target="_blank">
            <img src={github} alt="github icon" className='contact-icon'/>
                </a>
                <a href="mailto:thomasrobsmith@gmail.com" target='_blank'>
            <img src={email} alt="email icon" className='contact-icon'/>
                </a>
            <a href='tel:+4407397337006'>
            <img src={phone} alt="phone icon" className='contact-icon'/>
            </a>
            </div>
        </>
    )
};

export default ContactCard;