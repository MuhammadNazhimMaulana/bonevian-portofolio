import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 mx-auto text-slate-200">
            <h1 className="text-center text-xl md:text-4xl mt-3">About</h1>
            <div className="md:px-72">
                <p className="text-justify p-5 text-sm md:text-lg">My name is Muhammad Nazhim Maulana, Bonevian is just my nickname. I am a Back End Developer but also like to try some Front End stuffs, so I am kind of a fullstack as well. I have been learning coding for almost three years, I also got experienced for a year working in a real company. It was a great experience cause I got a lot of new knowledges. I also join developer community to make my skill even wider.</p>
                <p className="text-justify p-5 text-sm md:text-lg">One more extra thing, I also enjoy working in a team. We all know that programming or coding is not a one man show, it is more like a team work.</p>
                <div className="p-5 -mt-4">
                    <Link to="http://github.com/MuhammadNazhimMaulana" target="_blank">
                        <button className="p-2 text-sm bg-slate-200 text-primary rounded-lg hover:bg-white">Resume</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default About;