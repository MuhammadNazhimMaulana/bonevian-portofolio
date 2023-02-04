import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="fixed top-0 left-0 w-full">
            <div className="flex bg-white p-4 justify-between">
                <div className="px-6 text-primary font-bold flex items-center text-lg">Bonevian</div>
                <ul className="flex items-center">
                    <li className="ml-4 text-primary font-bold hover:bg-slate-50 p-3 rounded-full transition-all duration-200"><NavLink to="/">Home</NavLink></li>
                    <li className="ml-4 text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200"><NavLink to="/about">About</NavLink></li>
                    <li className="ml-4 text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200"><NavLink to="/">Projects</NavLink></li>
                    <li className="ml-4 mr-4 text-primary font-bold py-3 hover:bg-slate-50 p-3 rounded-full transition-all duration-200"><NavLink to="/">Contact</NavLink></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;