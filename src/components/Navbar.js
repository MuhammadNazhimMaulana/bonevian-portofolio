import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="fixed top-0 left-0 w-full">
            <div className="md:flex bg-white md:p-4 justify-between">
                <div className="md:px-6 text-primary font-bold flex items-center text-2xl">Bonevian</div>
                <ul className="flex items-center">
                    <li className="ml-4"><NavLink to="/" className="text-primary font-bold hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Home</NavLink></li>
                    <li className="ml-4"><NavLink to="/about" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">About</NavLink></li>
                    <li className="ml-4"><NavLink to="/projects" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Projects</NavLink></li>
                    <li className="ml-4 mr-4"><NavLink to="/contact" className="text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200">Contact</NavLink></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;