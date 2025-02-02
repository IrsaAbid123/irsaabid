"use client";

import { timelineData } from "@/data/experience-data";
import { Timeline } from "./ui/TimeLine";

const Experience = () => {
    return (
        <div className="w-full py-20" id="experience">
            <h1 className="heading">
                Work{" "}
                <span className="text-purple">Experience</span>
            </h1>
            <Timeline data={timelineData} />
        </div>
    );
};

export default Experience;