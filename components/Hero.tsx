import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from "react-icons/fa6";
import YourImage from './path/to/your/image.jpg'  // Add your image path
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                {/* Spotlights  */}
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

                {/* Grid  */}
                <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>

                {/* Flex layout for text and image */}
                <div className="flex justify-between items-center relative my-20 z-10">
                    {/* Text content on the left */}
                    <div className="max-w-[40vw] flex flex-col items-start justify-center">
                        <p className="uppercase tracking-widest text-2xl text-left text-blue-100 ">
                            Hello, my name is <strong className='text-purple'>Irsa Abid</strong>
                        </p>
                        <TextGenerateEffect
                            words="Full Stack Developer"
                            className="text-left text-[40px] md:text-5xl lg:text-6xl"
                        />
                        <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
                            Specializing in building scalable web and mobile applications, exploring DevOps and AWS to enhance deployment efficiency.
                        </p>

                        <a href="#about">
                            <MagicButton
                                title="Show my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>

                    {/* Image on the right */}
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <Image
                            src="/pfp.png"
                            width={240}
                            height={240}
                            alt="Irsa Abid"
                            className="rounded-full w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
