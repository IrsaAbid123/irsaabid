"use client"

import { cn } from "@/lib/utils"
import Lottie from "react-lottie"
import animationData from "@/data/confetti.json"
import { IoCopyOutline } from "react-icons/io5"
import { useState } from "react"
import Image from "next/image"
import type React from "react"
import { BackgroundGradientAnimation } from "./GradientBg"
import MagicButton from "../MagicButton"

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return <div className={cn("grid grid-cols-1 gap-8 mx-auto", className)}>{children}</div>
}

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string
    id: number
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    img?: string
    imgClassName?: string
    titleClassName?: string
    spareImg?: string
}) => {
    const [copied, setCopied] = useState(false)

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    const handleCopy = () => {
        const text = "hsu@jsmastery.pro"
        navigator.clipboard.writeText(text)
        setCopied(true)
    }

    return (
        <div
            className={cn(
                "row-span-1 p-4 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className,
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <Image
                            src={img || "/placeholder.svg"}
                            alt={title?.toString() || "Grid item"}
                            width={1920}
                            height={1080}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
                    {spareImg && (
                        <Image
                            src={spareImg || "/placeholder.svg"}
                            alt="Additional image"
                            width={1920}
                            height={1080}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                    )}
                >
                    <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white`}>{title}</div>

                    <div
                        className={`
              font-sans font-extralight text-sm text-[#c2c3cf] z-10
              ${id === 1 || id === 5 ? "w-full" : "md:max-w-32"}
              md:text-xs lg:text-base
            `}
                    >
                        {description}
                    </div>

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

