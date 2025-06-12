import Header from './components/header'
import Contact from './components/contact'
import AboutMe from './components/about_me'
import Courses from './components/courses'
import Internship from './components/internship'
import Projects from './components/projects'
import Footer from './components/footer'
import Home from './components/home'
import React, { useRef, useEffect } from "react";

 function SectionTransition({ color = "violet" }) {
    const colorMap = {
        violet: "#7c3aed",
        yellow: "#eab308",
    };

    const morphRef = useRef(null);

    useEffect(() => {
        let frame = 0;
        let running = true;

        const base = [40, 140, 0, 80];
        const amp = 15; 
        const speed = 0.015; 

        function animate() {
            if (!running) return;

            const y1 = 40 + Math.sin(frame * speed) * amp;
            const y2 = 140 + Math.cos(frame * speed * 0.7) * amp;
            const y3 = 0 + Math.sin(frame * speed * 1.3) * (amp * 0.6);
            const y4 = 80 + Math.cos(frame * speed * 0.9) * (amp * 0.7);

            const d = `M0,${y1.toFixed(2)} C480,${y2.toFixed(2)} 960,${y3.toFixed(2)} 1440,${y4.toFixed(2)} L1440,80 L0,80 Z`;
            if (morphRef.current) {
                morphRef.current.setAttribute("d", d);
            }
            frame++;
            requestAnimationFrame(animate);
        }

        animate();
        return () => { running = false; };
    }, []);

    return (
        <div className="w-full bg-black/70 overflow-hidden leading-none relative" aria-hidden="true">
            <svg
                viewBox="0 0 1440 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-15"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor={colorMap[color]} stopOpacity="0.25" />
                        <stop offset="1" stopColor={colorMap[color]} stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                <path
                    ref={morphRef}
                    d="M0,40 C480,140 960,0 1440,80 L1440,80 L0,80 Z"
                    fill="url(#gradient)"
                />
                <path
                    d="M0,30 C600,120 960,10 1440,70 L1440,80 L0,80 Z"
                    fill={colorMap[color]}
                    opacity="0.10"
                />
                <path
                    d="M0,50 C600,70 1000,50 1440,60 L1440,80 L0,80 Z"
                    fill={colorMap[color]}
                    opacity="0.07"
                />
            </svg>
        </div>
    );
}

function AnimatedParticles({ colors = ["violet", "yellow"], className = "" }) {
    const getParticleColors = (color) => {
        const colorMap = {
            violet: {
                primary: "bg-violet-500",
                secondary: "bg-violet-400",
                tertiary: "bg-purple-500"
            },
            yellow: {
                primary: "bg-yellow-500",
                secondary: "bg-yellow-400",
                tertiary: "bg-orange-500"
            }
        }
        return colorMap[color] || colorMap.violet;
    }

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {colors.map((color, colorIndex) => {
                const particleColors = getParticleColors(color);
                return (
                    <div key={color}>
                        <div 
                            className={`absolute w-72 h-72 ${particleColors.primary} rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse`}
                            style={{
                                top: `${10 + colorIndex * 30}%`,
                                left: `${-5 + colorIndex * 20}%`,
                                animationDelay: `${colorIndex * 1000}ms`,
                                animationDuration: '4s'
                            }}
                        />
                        
                        <div 
                            className={`absolute w-64 h-64 ${particleColors.secondary} rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse`}
                            style={{
                                top: `${20 + colorIndex * 25}%`,
                                right: `${-5 + colorIndex * 15}%`,
                                animationDelay: `${500 + colorIndex * 1000}ms`,
                                animationDuration: '3.5s'
                            }}
                        />
                        
                        <div 
                            className={`absolute w-56 h-56 ${particleColors.tertiary} rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse`}
                            style={{
                                bottom: `${5 + colorIndex * 20}%`,
                                left: `${30 + colorIndex * 25}%`,
                                animationDelay: `${1500 + colorIndex * 1000}ms`,
                                animationDuration: '4.5s'
                            }}
                        />
                    </div>
                );
            })}
            

        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative  ">
            <div className="fixed inset-0 pointer-events-none z-0">
                <AnimatedParticles colors={["violet", "yellow"]} />
            </div>

            <div className="relative z-10">
                    <Header />
                
                <section id="home" className="scroll-mt-16 relative">
                    <AnimatedParticles colors={["violet"]} className="opacity-60" />
                    <div className="relative z-10">
                        <Home />
                    </div>
                    <SectionTransition color="violet" />
                </section>
                
                <section id="about_me" className="scroll-mt-13 relative">
                    <AnimatedParticles colors={["yellow", "violet"]} className="opacity-50" />
                    <div className="relative z-10">
                        <AboutMe />
                    </div>
                    <SectionTransition color="yellow" />
                </section>
                
                <section id="internship" className="scroll-mt-13 relative">
                    <AnimatedParticles colors={["violet"]} className="opacity-40" />
                    <div className="relative z-10">
                        <Internship />
                    </div>
                                        <SectionTransition color="violet" />

                </section>
                
                <section id="projects" className="scroll-mt-13 relative">
                    <AnimatedParticles colors={["yellow", "violet"]} className="opacity-45" />
                    <div className="relative z-10">
                        <Projects />
                    </div>
                    <SectionTransition color="yellow" />
                </section>
                
                <section id="courses" className="scroll-mt-13 relative">
                    <AnimatedParticles colors={["violet"]} className="opacity-35" />
                    <div className="relative z-10">
                        <Courses />
                    </div>
                    <SectionTransition color="violet" />
                </section>
                
                <section id="contact" className="scroll-mt-13 relative">
                    <AnimatedParticles colors={["yellow", "violet"]} className="opacity-50" />
                    <div className="relative z-10">
                        <Contact />
                    </div>
                </section>
                
                <div className="relative z-10">
                    <Footer />
                </div>
            </div>

            <style >{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-20px) rotate(120deg); }
                    66% { transform: translateY(10px) rotate(240deg); }
                }
                
                @keyframes drift {
                    0% { transform: translateX(0px) translateY(0px) scale(1); }
                    25% { transform: translateX(15px) translateY(-10px) scale(1.05); }
                    50% { transform: translateX(-10px) translateY(-5px) scale(0.95); }
                    75% { transform: translateX(5px) translateY(15px) scale(1.02); }
                    100% { transform: translateX(0px) translateY(0px) scale(1); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-drift {
                    animation: drift 8s ease-in-out infinite;
                }
                
                @keyframes enhanced-pulse {
                    0%, 100% { 
                        opacity: 0.2; 
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.4; 
                        transform: scale(1.05);
                    }
                }
                
                .animate-enhanced-pulse {
                    animation: enhanced-pulse 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default App