import React, { useRef, useEffect } from 'react';

export default function Courses() {
    const certificates = [
        {
            title: "COBOL Programming with VSCode",
            institution: "IBM",
            link: "/assets/images/certificaten/COBOL_Programming_with_VSCode_Badge20250111-25-opanrd.pdf"
        },
        {
            title: "Kotlin Cursus",
            institution: "Codecademy",
            link: "/assets/images/certificaten/CursusKotlin.png"
        },
        {
            title: "Angular Cursus",
            institution: "Sololearn",
            link: "/assets/images/certificaten/Jef_Ceulemans_Angular.pdf"
        },
        {
            title: "Kali Linux oefeningen",
            institution: "Coursera",
            link: "/assets/images/certificaten/kali.png",
            note: "Geen officieel certificaat, dit is een screenshot van afgeronde oefeningen."
        },
        {
            title: "Swift tutorials",
            institution: "Apple",
            link: "https://developer.apple.com/tutorials/develop-in-swift/welcome-to-develop-in-swift-tutorials",
            note: "Reeks tutorials gevolgd, geen officieel certificaat."
        },
    ];

    const cardRefs = certificates.map(() => useRef(null));

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.forEach(ref => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 80) {
                        ref.current.classList.add('animate-fade-in-up');
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [cardRefs]);

    return (
        <section id="courses" className="bg-black/70 scroll-mt-16 pb-10 pt-10 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative   p-8 sm:p-10 rounded-2xl  backdrop-blur-md overflow-hidden">

                    <h2 className="text-4xl font-bold text-violet-400 mb-8 text-center">Behaalde Certificaten & Cursussen</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, idx) => (
                            <div
                                key={idx}
                                ref={cardRefs[idx]}
                                className="opacity-0 relative border border-white/30 shadow-lg rounded-2xl p-6 flex flex-col backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200"
                            >
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />

                                <h3 className="text-xl font-semibold text-violet-400 mb-1">{cert.title}</h3>
                                <div className="text-sm text-gray-200 mb-2">
                                    {cert.institution}
                                </div>
                                {cert.note && (
                                    <div className="text-xs text-gray-400 italic mb-2">{cert.note}</div>
                                )}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black  font-semibold py-2 px-4 rounded-md text-center transition w-full mt-auto"
                                    >
                                        Bekijk {
                                            cert.title.toLowerCase().includes('tutorial')
                                                ? 'tutorial'
                                                : cert.title.toLowerCase().includes('screenshot') || cert.note?.toLowerCase().includes('screenshot')
                                                    ? 'screenshot'
                                                    : 'certificaat'
                                        }
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .animate-fade-in-up {
                  opacity: 1 !important;
                  transform: translateY(0) scale(1);
                  transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
                }
                [class*="opacity-0"]:not(.animate-fade-in-up) {
                  opacity: 0;
                  transform: translateY(40px) scale(0.98);
                  transition: opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1);
                }
            `}</style>
        </section>
    );
}