import Image from "next/image";

export const content = [
    {
        title: "Full Stack Development",
        description:
            "I specialize in designing and building scalable web and mobile applications using modern technologies like React.js, Next.js, React Native, and Node.js. From crafting responsive user interfaces to developing robust backends, I ensure high performance, maintainability, and a seamless user experience. My expertise in full-stack development enables me to create applications that are both dynamic and efficient.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/services/full2.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Full Stack Development"
                />
            </div>
        ),
    },
    {
        title: "API Development & Integration",
        description:
            "Building secure, efficient, and scalable RESTful APIs using Node.js, NestJS, and Express.js. Whether it’s integrating third-party services, implementing Firebase Authentication, or setting up WebSockets for real-time communication, I ensure smooth and reliable data exchange between systems. My API solutions are optimized for high performance, scalability, and security.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/services/api.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="API Integration"
                />
            </div>
        ),
    },
    {
        title: "Database Management",
        description:
            "Managing and optimizing databases for high availability and performance. I work extensively with MongoDB, Mongoose, and MySQL, focusing on efficient schema design, query optimization, and secure data storage. Whether it’s handling complex relationships or ensuring data integrity, I make sure your application has a well-structured and reliable database solution.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/services/data1.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Database Management"
                />
            </div>
        ),
    },
    {
        title: "Cloud & Deployments",
        description:
            "Ensuring smooth deployment and scalability using AWS, Firebase, and Vercel. I specialize in setting up CI/CD pipelines for automated deployments, optimizing cloud infrastructure, and managing serverless solutions. From hosting to performance monitoring, I make sure your applications are deployed efficiently with minimal downtime and maximum reliability.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/services/cloud1.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Cloud Deployments"
                />
            </div>
        ),
    },
];
