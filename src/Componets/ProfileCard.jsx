import profilePic from '../assets/profilePicture.jpg'

const ProfileCard = () => {
    return (
        <div className='card'>
        <img src={profilePic} className="profile-pic" alt='Tom Smith Profile Picture'/>
        <div className='profile-text'>
            <h2>About me</h2>
            <text>
                "I am a highly motivated trainee software developer with skills in both design and technology. 
                Through my background in architecture, I balanced creative and technical thinking, developing a 
                love of problem solving that drove me to explore programming. Being enrolled on the Northcoders 
                software development bootcamp, I have gained extensive experience working with industry standard 
                coding practices and grown my interest in programming in to a love of software development."
            </text>
        </div>
        </div>
    )
};

export default ProfileCard