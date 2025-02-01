import React from 'react'
import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import { services } from '@/data'

const Services = () => {
    return (
        <div>
            <h1 className="heading">
                My{" "}
                <span className="text-purple">Services</span>
            </h1>
            <AnimatedTestimonials testimonials={services} />
        </div>
    )
}

export default Services
