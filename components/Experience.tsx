"use client";

import { Timeline } from "./ui/TimeLine";

const Experience = () => {
    const timelineData = [
        {
            title: "2024",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Senior Frontend Developer at MetaSpace</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Led team of 5 developers in building 3D web experiences
                        • Implemented WebGL and Three.js for interactive 3D rendering
                        • Reduced load times by 45% through optimization techniques
                    </p>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Full Stack Developer at TechVision</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Built enterprise-scale Next.js applications serving 100K+ users
                        • Developed real-time collaboration features using WebSocket
                        • Implemented CI/CD with GitHub Actions and AWS
                    </p>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Frontend Developer at InnovateLab</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Created responsive UIs with React and Tailwind CSS
                        • Integrated REST APIs and state management with Redux
                        • Improved performance scores to 95+ on Lighthouse
                    </p>
                </div>
            ),
        }
    ];;

    return (
        <div className="w-full py-20">
            <h1 className="heading text-center">Work Experience</h1>
            <Timeline data={timelineData} />
        </div>
    );
};

export default Experience;