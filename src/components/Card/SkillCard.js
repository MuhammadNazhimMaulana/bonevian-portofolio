const SkillCard = ({name, desc}) => {
    return ( 
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 mb-6">
            <div className="px-3 py-2 flex">
                <div className="text-primary mr-4">{name}</div>
                <p className="text-gray-700 text-base text-justify">
                    {desc}
                </p>
            </div>
        </div>
    );
}
 
export default SkillCard;