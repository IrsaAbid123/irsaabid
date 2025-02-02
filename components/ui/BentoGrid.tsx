"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"
import MagicButton from "../MagicButton"
import { FaLocationArrow } from "react-icons/fa6"
import { TypewriterEffect } from "./TypewriterEffect"

const words = [
    {
        text: "Full",
    },
    {
        text: "Stack",
    },
    {
        text: "Developer",
        className: "text-blue-500 dark:text-blue-500",
    }
];

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
}: {
    className?: string
    id: number
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    img?: string
    imgClassName?: string
    titleClassName?: string
}) => {
    return (
        <div
            className={cn(
                "row-span-1 p-20 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col items-center space-y-4",
                className,
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className="w-full flex flex-col gap-14  justify-center mb-4">
                <h1 className="heading ">
                    About{" "}
                    <span className="text-purple">Me</span>
                </h1>
                {img && (
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-purple opacity-15 blur-2xl rounded-full"></div>
                        <div className="relative z-10">
                            <Image
                                src={img || "/placeholder.svg"}
                                alt={title?.toString() || "Grid item"}
                                width={200}
                                height={200}
                                className={cn("object-cover rounded-full", imgClassName)}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className={cn(titleClassName, "text-center w-full px-10")}>
                <TypewriterEffect words={words} className="my-5" />
                <p className="font-sans text-lg text-gray-300 ">{description}</p>
            </div>
            <a href="#experience" className="">
                <MagicButton
                    title="My teck stacks"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
    )
}

