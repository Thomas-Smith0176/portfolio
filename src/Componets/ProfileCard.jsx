import profilePic from '../assets/profilePicture.jpg'

const ProfileCard = () => {
    return (
        <div className='card'>
        <img src={profilePic} className="profile-pic" alt='Tom Smith Profile Picture'/>
        <div className='profile-text'>
            <h3 className='profile-header'>About me</h3>
            <text className='profile-text-full'>
                I am a motivated Junior Software Developer with skills in design and technology. 
                My background in Architecture saw me balance creative and technical thinking, developing a 
                love of problem solving that lead me to programming. Completing Northcoders' Software Development 
                bootcamp, I gained experience working with industry standard 
                coding practices and turned an interest in programming into a love of software development.
            </text>
            <text className='profile-text-cut'>
                I am a motivated Junior Software Developer with skills in design and technology. 
                My background in Architecture saw me balance creative and technical thinking, developing a 
                love of problem solving that lead me to programming. Completing Northcoders' Software Development 
                bootcamp, I gained experience working with industry standard 
                coding practices and turned an interest in programming into a love of software development.
            </text>
        </div>
        </div>
    )
};

export default ProfileCard