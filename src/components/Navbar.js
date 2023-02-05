import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isActive, setActive] = useState("false");

    // Click Humberger Handler
    const humbergerClick = (e) => {
        // hamburger.classList.toggle('hamburger-active');
        // navMenu.classList.toggle('hidden');
        setActive(!isActive); 
    }

    return ( 
        <div className="top-0 left-0 w-full">
            <div className="md:flex bg-white md:p-4 justify-between">
                <div className="md:px-6 text-primary flex items-center mb-3 justify-between md:justify-start">
                    <p className="font-bold text-2xl ml-2 md:ml-0">Bonevian</p>

                    <button id="hamburger" name="hamburger" onClick={humbergerClick} type="button" className={isActive ? "null md:hidden mr-2 md:mr-0" : "hamburger-active md:hidden mr-2 md:mr-0"}>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                </div>
                <ul id="nav-menu" onClick={humbergerClick} className={isActive ? "hidden md:flex flex-col md:flex-row items-center" : "null flex flex-col md:flex-row items-center"}>
                    <li className="md:ml-4"><NavLink to="/" className="text-primary font-bold hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Home</NavLink></li>
                    <li className="md:ml-4"><NavLink to="/about" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">About</NavLink></li>
                    <li className="md:ml-4"><NavLink to="/projects" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Projects</NavLink></li>
                    <li className="md:ml-4 md:mr-4"><NavLink to="/contact" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Contact</NavLink></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;