import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 text-slate-200 md:flex lg:px-28">
            <div className="md:flex-1">
                <p className="text-center text-5xl md:text-6xl mt-3 mb-7 font-bold">Contact</p>
                <p className="ml-7 mb-2 text-lg">Email: nazhimmaulanamuhammad@gmail.com</p>
                <p className="ml-7 mb-2 text-lg">Discord: Bone#1357</p>
                <span className="ml-7 mt-2 mb-2 text-2xl">
                    <Link to="http://github.com/MuhammadNazhimMaulana" target="_blank"><FontAwesomeIcon icon={faGithub} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://www.instagram.com/nazhimmaulana/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://www.facebook.com/nazhim.maulana.3" target="_blank"><FontAwesomeIcon icon={faFacebook} className="mr-4 hover:text-white" /></Link>
                    <Link to="https://twitter.com/NazhimMaulana" target="_blank"><FontAwesomeIcon icon={faTwitter} className="mr-4 hover:text-white" /></Link>
                </span>
            </div>

            <div className="md:flex-1 p-8">
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="username">Name</label>
                    <input className="mt-1 block text-primary w-full rounded-md border-gray-300 shadow-sm focus:border-primary" id="username" type="text" placeholder="Username" />
                </div>
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="mt-1 block text-primary w-full rounded-md border-gray-300 shadow-sm focus:border-primary" id="email" type="email" placeholder="Email" />
                </div>
                <div className="block mb-6">
                    <label className="block text-slate-200 text-sm font-bold mb-2" htmlFor="email">Message</label>
                    <textarea className="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary" name="message" id="message" cols="30" rows="5"></textarea>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;