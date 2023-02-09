import ProjectCard from '../components/Card/ProjectCard';

const Projects = () => {
    return ( 
        <div className="mb-auto mt-4 md:mt-20 mx-auto text-slate-200 px-3">
            <h1 className="text-center text-xl md:text-4xl mt-3">Projects</h1>
            <div className="lg:px-72">
                <p className="text-justify px-1 my-4 text-sm md:text-lg">Here are some projects that I have done</p>
            </div>
            <div className="lg:grid lg:grid-cols-2">
                <ProjectCard picture="lara-gis.png" name="Laravel Gis" desc="A simple Laravel Project that use Leaflet js for showing map." />
                <ProjectCard picture="lumen-fake-api.png" name="Lumen API" desc="Lumen API with dummy data that could be used for practicing api consumption." />
            </div>
        </div>
     );
}
 
export default Projects;