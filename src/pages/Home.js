import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 mx-auto text-slate-200">
            <h1 className="text-center text-xl md:text-4xl mt-3">Hello, I Am Bonevian</h1>
            <p className="text-center text-lg md:text-2xl md:mt-1">Just Call Me Bone</p>
            <div className="md:px-72">
                <p className="text-justify p-5 text-sm md:text-lg">Currently I am 20 Years Old and still study at college. I really like coding especially things that related with Back End Development. But I am also interested in Front End Stuffs. Currently still practicing on React and also Express JS. I am also experienced in using PHP Frameworks Like Laravel, Code Igniter, and Lumen. I want to improve my skills more from practicing and having more projects.</p>
                <div className="p-5 -mt-4">
                    <Link  to="http://github.com/MuhammadNazhimMaulana" target="_blank">
                        <button className="p-2 text-sm bg-slate-200 text-primary rounded-lg hover:bg-white">My Github</button>
                    </Link >
                </div>
            </div>
        </div>
     );
}
 
export default Home;