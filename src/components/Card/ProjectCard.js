import { Link } from 'react-router-dom';

const ProjectCard = ({picture, name, desc, link}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 mb-6">
            <img className="w-full" src={process.env.PUBLIC_URL + "/Projects/" + picture}  alt="Sunset in the mountains" />
            <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 text-primary">{name}</div>
                <Link  to={link} target="_blank">
                    <p className="text-gray-700 text-base text-justify">
                        {desc}
                    </p>
                </Link>
            </div>
        </div>
    );
}
 
export default ProjectCard;