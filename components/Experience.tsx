"use client";

import { Timeline } from "./ui/TimeLine";

const Experience = () => {
    const timelineData = [
        {
            title: "Oct 2023 - Feb 2024",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">React Native Intern at TWS</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Contributed to the
                        development of mobile applications using React
                        Native, focusing on user interface and experience
                        enhancements.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Assisted in implementing
                        and testing new features, ensuring high
                        performance and quality in the applications
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Worked closely with the
                        development team to integrate various third-party
                        APIs and services
                    </p>
                    <p className="text-purple font-semibold">Tech Stack:</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        React Native,Mongodb,
                        Mongoose, Firebase,
                        Websockets
                    </p>
                </div>
            ),
        },
        {
            title: "Apr 2024 - Sep 2024",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Full Stack Developer at Bezonet</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Designed and implemented robust, scalable web and
                        mobile applications using React Native, React, and
                        Node.js.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Developed and
                        integrated RESTful APIs with a focus on CRUD
                        operations.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Managed MongoDB for
                        efficient data storage and retrieval, including qu
                        optimization and schema design.
                    </p>

                    <p className="text-purple font-semibold">Tech Stack:</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        ReactJs , React Native,
                        NodeJs, NestJs, MongoDb,
                        Mongoose, MySql, NodeJs, Webhooks, Google Maps,
                        Firebase, Websockets
                    </p>
                </div>
            ),
        },
        {
            title: "Sep 2024 - Present",
            content: (
                <div className="space-y-4">
                    <h4 className="text-lg font-bold">Full Stack Developer at AirTective</h4>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        • Currently working on high-performance applications.
                    </p>
                    <p className="text-purple font-semibold">Tech Stack:</p>
                    <p className="text-neutral-700 dark:text-neutral-300">
                        Next Js, Express Js, Authentication, Access Control, Scalable Backend
                    </p>
                </div>
            ),
        }
    ];


    return (
        <div className="w-full py-20">
            <h1 className="heading">
                Work{" "}
                <span className="text-purple">Experience</span>
            </h1>
            <Timeline data={timelineData} />
        </div>
    );
};

export default Experience;