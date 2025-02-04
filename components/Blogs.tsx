"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function Blog() {
    return (
        <div className="h-[45rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h1 className="heading py-20">
                What I{" "}
                <span className="text-purple">Do</span>
            </h1>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        id: 1,
        quote:
            "From the very beginning, I’ve been fascinated by solving real-world problems with technology. I started as a curious learner, exploring different frameworks and languages, but soon realized that JavaScript was my true playground. Over time, I specialized in React, React Native, Node.js, Next.js, and NestJS, turning ideas into efficient, scalable applications.",
        image: '/blog/blog1.avif',
        title: "Who I Am & What I Do",
    },
    {
        id: 2,
        quote:
            "For me, coding isn’t just about writing functions—it’s about building meaningful experiences. Whether it's integrating Google Maps for location-based services, developing APIs for seamless communication, or designing real-time applications, I always look for ways to optimize performance and improve user experience.",
        image: '/blog/blog2.jpeg',
        title: "What Drives Me",
    },
    {
        id: 3,
        quote: "Right now, I’m diving deep into DevOps and Cloud Development. I want to understand how pipelines work, how servers are managed, and how deployments are optimized for scalability. I’m currently working on my AWS certification, exploring CI/CD, load balancing, and infrastructure management to enhance my skill set beyond just development.",
        image: "/blog/blog3.jpg",
        title: "Current Interests & Exploration",
    },
    {
        id: 4,
        quote:
            "Technology is ever-evolving, and so am I. In the coming years, I see myself mastering high-availability architectures, scaling applications to millions of users, and automating deployment pipelines to make development faster and more reliable. I want to push boundaries and turn complex problems into innovative solutions—because that’s what excites me the most.",
        image: "/blog/blog4.jpg",
        title: "What’s Next?",
    }
];
