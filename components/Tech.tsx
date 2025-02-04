"use client"

import { techIcons } from "@/data"
import Image from 'next/image'
import { motion } from "framer-motion"

export function TechGrid() {
    return (
        <div className="my-20" id="tech">
            <h1 className="heading text-center my-20">
                Tech <span className="text-purple">Stacks</span>
            </h1>
            <div className="relative bg-cover bg-center bg-no-repeat p-8 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 "
                style={{
                    backgroundImage: "url('/bg-tech.jpg')", // Replace with your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 backdrop-blur-lg bg-black/40 rounded-3xl"></div>
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-4 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
                        {techIcons.map((tech) => {
                            return (
                                <motion.div
                                    key={tech.id}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative rounded-lg ${tech.color} px-4 py-8 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 ease-in-out  ${tech.glowColor}`}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <Image src={tech.icon} alt="icon" width={60} height={60} />
                                        {/* <span className={`text-sm font-medium ${tech.textColor}`}>
                                            {tech.title}
                                        </span> */}
                                    </div>
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-black/10" />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
