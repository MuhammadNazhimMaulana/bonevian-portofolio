import MailButton from '../components/Button/MailButton';
import SkillCard from '../components/Card/SkillCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter, faReact, faHtml5, faCss3, faLaravel, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 mx-auto text-slate-200">
            <h1 className="text-center text-xl md:text-4xl mt-3">About</h1>
            <div className="lg:px-72">
                <p className="text-justify p-5 text-sm md:text-lg">My name is Muhammad Nazhim Maulana, Bonevian is just my nickname. I am a Back End Developer but also like to try some Front End stuffs, so I am kind of a fullstack as well. I have been learning coding for almost three years, I also got experienced for a year working in a real company. It was a great experience cause I got a lot of new knowledges. I also join developer community to make my skill even wider.</p>
                <p className="text-justify p-5 text-sm md:text-lg">One more extra thing, I also enjoy working in a team. We all know that programming or coding is not a one man show, it is more like a team work.</p>
            </div>

            <div className="lg:px-72 px-4">
                <hr />
                <div className="mb-2">
                    <p className="p-5 text-md font-bold text-lg">Skills</p>
                    <div className="md:grid md:grid-cols-2">
                        <SkillCard name={<FontAwesomeIcon icon={faLaravel} />} desc="Laravel"></SkillCard>
                        <SkillCard name={<FontAwesomeIcon icon={faReact} />} desc="React JS"></SkillCard>
                        <SkillCard name={<FontAwesomeIcon icon={faHtml5} />} desc="HTML"></SkillCard>
                        <SkillCard name={<FontAwesomeIcon icon={faJs} />} desc="Javascript"></SkillCard>
                        <SkillCard name={<FontAwesomeIcon icon={faCss3} />} desc="CSS"></SkillCard>
                        <SkillCard name={<FontAwesomeIcon icon={faBootstrap} />} desc="Bootstrap"></SkillCard>
                    </div>
                </div>
            </div>

            <div className="lg:px-72 px-4">
                <hr />
            </div>

            <div className="lg:px-72 mb-2">
                <p className="p-5 text-md">Email me at <MailButton label="nazhimmaulanamuhammad@gmail.com" mailto="mailto:nazhimmaulanamuhammad@gmail.com" /> </p>
                <span className="p-5 mt-2 mb-2 text-2xl">
                    <Link to="http://github.com/MuhammadNazhimMaulana" target="_blank"><FontAwesomeIcon icon={faGithub} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://www.instagram.com/nazhimmaulana/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://www.facebook.com/nazhim.maulana.3" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://twitter.com/NazhimMaulana" target="_blank"><FontAwesomeIcon icon={faTwitter} className="mr-4 hover:text-white" /></Link>
                </span>
            </div>
        </div>
     );
}
 
export default About;