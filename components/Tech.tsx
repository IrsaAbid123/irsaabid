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
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-3 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                        {techIcons.map((tech) => {
                            return (
                                <motion.div
                                    key={tech.id}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative rounded-lg ${tech.color} px-4 py-8 hover:shadow-lg transition-all duration-200 ease-in-out ${tech.glowColor}`}
                                >
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <Image src={tech.icon} alt="icon" width={60} height={60} />
                                        <span className={`text-sm font-medium ${tech.textColor}`}>
                                            {tech.title}
                                        </span>
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
