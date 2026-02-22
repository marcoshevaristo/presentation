"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [animationStage, setAnimationStage] = useState(0);

    useEffect(() => {
        // Stage 0: Initial state
        // Stage 1: Fade in text (starts immediately)
        const timer1 = setTimeout(() => setAnimationStage(1), 100);
        // Stage 2: Fade in photo
        const timer2 = setTimeout(() => setAnimationStage(2), 1000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto lg:justify-between justify-center">
                    {/* Text Content */}
                    <div className={`flex-1 transition-all duration-1000 ease-out text-center lg:text-left ${animationStage === 0 ? 'opacity-0' : 'opacity-100'
                        } ${animationStage >= 1 ? 'lg:translate-x-[-20%]' : 'lg:translate-x-0'
                        }`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Hi, I'm Marcos Evaristo
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
                            Full Stack Developer | UI/UX Enthusiast | Problem Solver
                        </p>
                        <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-2xl">
                            I build beautiful, performant web applications with modern technologies.
                            Passionate about creating seamless user experiences and writing clean code.
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 ${animationStage >= 1 ? 'lg:justify-start' : ''
                            } justify-center`}>
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border-2 border-zinc-300 dark:border-zinc-700 rounded-full hover:border-blue-600 dark:hover:border-blue-400 transition-colors font-medium flex items-center"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className={`flex-shrink-0 transition-all duration-1000 ease-out ${animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        } ${animationStage < 1 ? 'hidden' : 'block'
                        }`}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
                                {/* Replace /placeholder-photo.jpg with your actual photo path */}
                                <Image
                                    src="/profile-picture.jpeg"
                                    alt="Marcos Evaristo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
