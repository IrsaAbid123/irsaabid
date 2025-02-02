"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import { content } from "@/data/services";

export function Services() {
    return (
        <div className="p-20">
            <h1 className="heading my-20">
                My{" "}
                <span className="text-purple">Services</span>
            </h1>
            <StickyScroll content={content} />
        </div>
    );
}
