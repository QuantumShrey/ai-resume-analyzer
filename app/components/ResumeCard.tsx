import React from 'react';
import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({resume: { id, companyName, jobTitle, feedback, imagePath } }:{ resume: Resume}) => {
    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in zoom-in duration-700 transition-all hover:scale-105 hover:shadow-xl group">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2 transition-all duration-300 group-hover:translate-x-1">
                    <h2 className="!text-black font-bold break-words transition-colors duration-300 group-hover:text-blue-700">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500 transition-colors duration-300 group-hover:text-gray-700">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            <div className="gradient-border animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 transition-all duration-300 group-hover:shadow-lg">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                            src={imagePath}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </div>
        </Link>
    )
}

export default ResumeCard
