import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex flex-col items-center justify-center px-4'
        >
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>

                    {/* Profile Photo */}
                    <div className='flex justify-center opacity-0 animate-fade-in'>
                        <div className='relative'>
                            {/* Glow */}
                            <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-violet-500 blur-xl opacity-50'></div>

                            {/* Image */}
                            <img
                                src='./profile.png'
                                alt='Shashikant Shirsath'
                                className='relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-xl hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'>
                            {' '}Shashikant
                        </span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
                            {' '}Shirsath
                        </span>
                    </h1>

                    {/* Summary */}
                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        Full Stack Developer (MERN & PostgreSQL) with real-world experience in building
                        scalable web applications, APIs, and modern user interfaces. Passionate about
                        clean code, performance, and solving real-life problems through technology.
                    </p>

                    {/* CTA */}
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <ArrowDown className='h-5 w-5 text-primary' />
            </div>
        </section>
    )
}

export default HeroSection
