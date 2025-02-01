"use client"

export default function AboutSection() {
    return (
        <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-12">
                    <span className="text-white">About </span>
                    <span className="text-[#00c8ff]">Me</span>
                </h2>

                {/* Profile Image Container */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Glowing circle effect */}
                    <div className="absolute inset-0 rounded-full bg-[#00c8ff] blur-md opacity-50 animate-pulse"></div>
                    {/* Profile image */}
                    <div className="relative rounded-full w-full h-full border-2 border-[#00c8ff] overflow-hidden">
                        <img
                            src={`${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL : ""}/placeholder.svg?height=128&width=128`}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl font-semibold text-white mb-6">Frontend Developer!</h3>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quam iure, provident iste quos sequi vero
                    excepturi impedit laboriosam nisi incidunt quibusdam. Quos neque suscipit aut distinctio pariatur voluptate.
                    Ea sunt distincta maxime quibusque recusandae. Ut animi accusamus quibusdam labore beatae repellat, nisi
                    mollitia voluptatem.
                </p>

                {/* Read More Button */}
                <button className="px-6 py-2 bg-[#00c8ff] text-white rounded-md hover:bg-[#00a8ff] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00c8ff] focus:ring-opacity-50">
                    Read More
                </button>
            </div>
        </div>
    )
}

