import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBookOpen, faHeart, faBriefcase, faBullseye, faQuoteLeft, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';

export default function AboutMe() {
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),
    ];

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
        <>
            <section
                id="about_me"
                className="bg-cover bg-center bg-black/70 text-gray-200 pt-30 pb-6 px-6 sm:px-12"
                alt="Profile photo of Jef Ceulemans"
            >
                <div className="backdrop-blur-md p-8 sm:p-10 rounded-lg max-w-7xl mx-auto relative">
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                        <img
                            src="/assets/images/profile-photo/testen.jpg"
                            alt="Profile photo of Jef Ceulemans"
                            className="w-40 h-40 mt-6 object-cover rounded-full border-2 border-violet-500 shadow-md"
                        />
                    </div>

                    <div className="mt-24">
                        <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">Over mij</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                            <div ref={cardRefs[0]} className="opacity-0 border-white/30 border shadow-lg rounded-2xl p-6 backdrop-blur-md relative lg:col-span-3 hover:border-violet-400 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faUserGraduate} size="lg" className="text-violet-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-violet-400">Mijn Achtergrond</h3>
                                </div>
                                <p className="text-gray-200">
                                    Hallo! Mijn naam is Jef Ceulemans, een 21-jarige student in mijn laatste jaar Toegepaste Informatica,
                                    met als specialisatie Applicatieontwikkeling. Mijn interesse in IT begon al op jonge leeftijd, met een sterke focus
                                    op programmeren. Daarom koos ik bewust voor een IT-gerelateerde studierichting in mijn vijfde en zesde jaar
                                    van het middelbaar: IT en Netwerken.
                                </p>
                            </div>

                            <div ref={cardRefs[1]} className="opacity-0 relative rounded-2xl p-6 lg:col-span-3 shadow-xl backdrop-blur-md border border-white/30 overflow-hidden hover:border-violet-400 transition-colors duration-200 ">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />
                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faBookOpen} size="lg" className="text-violet-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-violet-400">Mijn Studies</h3>
                                </div>
                                <p className="text-gray-200">
                                    Na het middelbaar ben ik gestart met de opleiding Toegepaste Informatica aan Thomas More Hogeschool.
                                    In mijn tweede jaar koos ik de specialisatie Applicatieontwikkeling. Tijdens het eerste jaar maakten we kennis
                                    met een breed scala aan onderwerpen, en het werd al snel duidelijk dat de softwarekant — vooral applicatieontwikkeling —
                                    het beste bij mij paste.
                                </p>
                            </div>

                            <div ref={cardRefs[2]} className="opacity-0 border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md hover:border-yellow-500 transition-colors duration-200 lg:col-span-4 border relative ">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faHeart} size="lg" className="text-yellow-500 mr-3" />
                                    <h3 className="text-xl font-semibold text-yellow-500">Hobby's en Vrije Tijd</h3>
                                </div>
                                <p className="text-gray-200">
                                    Ik speel badminton en heb in het verleden deelgenomen aan toernooien. Ik gaf ook les
                                    aan de jongste leden van mijn club als vrijwilliger. Badminton leert je zowel zelfstandig als in teamverband te werken,
                                    een goede weerspiegeling van hoe ik werk. Zowel solo- als samenwerkingsomgevingen passen bij mij.
                                    Ik kook ook graag, ik begon toen ik ongeveer tien jaar oud was; zelfs toen bracht ik een hele
                                    dag in de keuken door om een driegangenmaaltijd te bereiden. Gelukkig gaat het nu wat sneller. In mijn vrije tijd
                                    probeer ik mezelf te verbeteren op verschillende gebieden binnen softwareontwikkeling. Ik volg cursussen en bouw mijn eigen
                                    applicaties om er beter in te worden. Ik volg momenteel bijvoorbeeld ook een cursus over hacking.
                                    Op die manier probeer ik mijn kennis te verbreden, verder dan alleen softwareontwikkeling.
                                </p>
                            </div>

                            <div ref={cardRefs[3]} className="opacity-0 border-white/30 border shadow-lg rounded-2xl backdrop-blur-md relative p-6 lg:col-span-2 hover:border-violet-400 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faBriefcase} size="lg" className="text-violet-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-violet-400">Studentenjob</h3>
                                </div>
                                <p className="text-gray-200">
                                    Naast mijn studies werk ik als jobstudent op de charcuterie/slagerij-afdeling bij Delhaize.
                                    Hoewel niet direct IT-gerelateerd, versterkt deze rol mijn soft skills. Ik heb dagelijks interactie met klanten,
                                    wat professionaliteit en een vriendelijke houding vereist. Het leert me ook initiatief te nemen en samen te werken binnen een team.
                                </p>
                            </div>

                            <div ref={cardRefs[4]} className="opacity-0 border-white/30 border shadow-lg rounded-2xl backdrop-blur-md relative p-6 lg:col-span-2 hover:border-violet-400 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faBullseye} size="lg" className="text-violet-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-violet-400">Toekomstplannen</h3>
                                </div>
                                <p className="text-gray-200">
                                    Mijn doel is om een succesvolle softwareontwikkelaar te worden en te werken aan innovatieve projecten die een echte impact hebben.
                                    Ik ben bijzonder geïnteresseerd in full-stack ontwikkeling en kijk ernaar uit om mijn kennis
                                    en vaardigheden verder te ontwikkelen door praktijkervaring op te doen.
                                </p>
                            </div>

                            <div ref={cardRefs[5]} className="opacity-0 border-white/30 border shadow-lg rounded-2xl backdrop-blur-md relative p-6 lg:col-span-2 hover:border-yellow-500 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-yellow-500 mr-3" />
                                    <h3 className="text-xl font-semibold text-yellow-500">Waarom ik doe wat ik doe</h3>
                                </div>
                                <blockquote className="text-gray-200 italic text-lg border-l-2 pl-4 border-yellow-400 ">
                                    "The only way to do great work is to love what you do."
                                </blockquote>
                                <p className="text-gray-300 text-right mt-2 font-medium">- Steve Jobs</p>
                                <p className="text-gray-200 mt-4">
                                    Gelukkig heb ik die passie gevonden in softwareontwikkeling.
                                </p>
                            </div>

                            <div ref={cardRefs[6]} className="opacity-0 border-white/30 border shadow-lg rounded-2xl backdrop-blur-md relative p-6 lg:col-span-2 flex flex-col justify-between hover:border-yellow-500 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40 " />

                                <div className="flex items-center mb-3">
                                    <FontAwesomeIcon icon={faFilePdf} size="lg" className="text-yellow-500 mr-3" />
                                    <h3 className="text-xl font-semibold text-yellow-500">Curriculum vitae</h3>
                                </div>
                                <p className="text-gray-200 mb-4">Ontdek meer over mijn opleiding en werkervaring.</p>
                                <a href="/assets/documents/cv/Curriculum vitae_Jef Ceulemans.pdf" target="_blank" rel="noopener noreferrer"
                                    className="mt-auto w-full block px-6 py-3 text-violet-400 text-center rounded-md font-semibold border-2 border-violet-400 hover:bg-violet-400 hover:text-black transition"
                                >
                                    Open Curriculum vitae
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style  >{`
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
            <Skills />
        </>
    );
}