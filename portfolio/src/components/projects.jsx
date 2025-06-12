import React, { useState, useRef, useEffect } from "react";


const projects = [
    {
        id: 1,
        title: "Carpoolapplicatie Axxes",
        image: "/assets/images/projects/axxes/homescherm.png",
        tech: ["Angular", ".NET 8.0", "MongoDB", "Tailwind CSS"],
        videoPromo: "https://www.youtube.com/embed/-dfTWIm0kos?si=teGnWjUUBSL-AvXq",
        videoDemo: "https://www.youtube.com/embed/zRYgnQqF1L8?si=2Hzew5dVzZDzjREU",
        description: [
            `Voor het vak Project 4.0 werkte ik in groep aan een opdracht voor de klant Axxes. 
      Zij wilden graag een carpoolapplicatie voor hun evenementen.
      Deze cursus begon al aan het begin van het jaar. In de eerste fase lag de focus op de analyse, het opstellen van 
      een projectplan en het maken van mock-ups. Het programmeren van de applicatie gebeurde in een periode van drie 
      weken tijdens de projectweek in de examenperiode.`,
            `Het einddoel was een applicatie waarmee evenementen konden worden aangemaakt. 
      Als gebruiker kon men zich inschrijven voor een evenement en aangeven of men chauffeur wilde zijn of niet. 
      Wanneer de deadline voor inschrijving naderde, kwam de AI in actie. Die analyseerde waar iedereen woonde en 
      wie er bereid was om te rijden. Op basis daarvan werden optimale routes opgesteld.`,
            `Als chauffeur ontving men een Google Maps-link met de route die gevolgd diende te worden om iedereen op te halen.
      Het doel van de applicatie was om een betere teamsfeer te creëren door samen te rijden met collega’s. 
      Het milieuaspect was mooi meegenomen: dankzij deze applicatie werd niet alleen de teamgeest versterkt, 
      maar leverden de gebruikers ook een bijdrage aan een duurzamere mobiliteit.`
        ],
        demoDesc: `In de bijgevoegde live demo van de applicatie is te zien hoe een evenement is aangemaakt en 
    hoe verschillende gebruikers zich hiervoor hebben ingeschreven. 
    Na de deadline heeft de AI meerdere carpools samengesteld met passagiers die, volgens de berekeningen, 
    het meest optimaal bij elkaar passen voor de rit.`,
        contribution: `Mijn grootste verwezenlijking in dit project was de integratie van de Google Maps API. Ik heb deze in de backend geïntegreerd, omdat het veiliger is om een API-key daar te bewaren in plaats van in de front-end. Ik gebruikte deze Google API voor verschillende doeleinden. Ik heb de API gebruikt om de lengte- en breedtegraad (longitude en latitude) van een adres te berekenen en deze ook weer om te zetten naar een leesbaar adres. Zoals in de live demo te zien is, voer ik een adres in. In de backend worden vervolgens de lengte- en breedtegraad van dit adres opgeslagen. 
    
                        In de front-end wordt deze lengte- en breedtegraad weer omgezet naar een echt adres. Dit is zo gedaan omdat de AI lengte- en breedtegraden nodig heeft. Bovendien is het een goede gewoonte om geen aparte velden in de database aan te maken voor berekeningen die uitgevoerd kunnen worden, op deze manier houden we alleen de lengte- en breedtegraad bij. Verder heb ik het welkomstscherm, het dashboard en de evenementenpagina gemaakt. Op die pagina kon men zich aanmelden voor een evenement en kiezen of men wel of geen chauffeur wilde zijn. Dit waren mijn grootste bijdragen, maar ik heb hier en daar ook bugs opgelost en fouten hersteld.`
    },
    {
        id: 2,
        title: "Festival Neon Nights",
        image: "/assets/images/projects/festival/homescherm.png",
        tech: ["Angular", ".NET 8.0", "MySQL", "Tailwind CSS"],
        description: [
            `Voor het vak Angular kregen we een opdracht in groep om een festivalwebsite te maken. 
            De bedoeling van deze website was dat een festivalorganisator een festival kan aanmaken, 
            compleet met artiesten, podia, tickets en meer. De festivalganger zou dan naar deze website surfen 
            om de line-up te bekijken en tickets te kopen als er interesse is. `
        ],
        contribution: `Mijn grootste verwezenlijking in dit project was het maken van de tijdschema's. Daarin kon je de planning van de podia per dag zien. Per podium zag je dan een tijdstabel van welke artiesten daar die dag zouden optreden. Ook heb ik authenticatie toegevoegd via Auth0. In de backend heb ik de API-routes beschermd zodat deze niet bereikt konden worden, behalve door de applicatie zelf. Verder heb ik ook adminrechten voorzien voor bepaalde delen van de applicatie.

                        Ook heb ik de line-up pagina gemaakt. Op deze pagina stonden alle artiesten die naar het festival zouden komen. Hier heb ik gebruikgemaakt van een Spotify API, die al in de backend geïntegreerd was door mijn medestudent. Je kon ook op een artiest drukken om meer info over die artiest te vinden. Ik heb hier ook een iframe gebruikt om via Spotify het meest bekende liedje van deze artiest te laten zien en af te spelen. Verder heb ik de algemene lay-out van de applicatie gemaakt. Ik had een paar kleuren gedefinieerd in Tailwind zodat in de applicatie overal dezelfde kleuren gebruikt zouden worden.`,
        screenshots: [
            {
                src: "/assets/images/projects/festival/artistinfo.png",
                caption: "Artiesten info"
            },
            {
                src: "/assets/images/projects/festival/planning.png",
                caption: "Planning"
            }
        ],
        woeps: [{
            src: "/assets/images/projects/festival/homescherm.png",
            caption: "Startpagina"
        },

        {
            src: "/assets/images/projects/festival/koop.png",
            caption: "Tickets"
        }
        ],
    },
    {
        id: 3,
        title: "Auto Scanner",
        image: "/assets/images/projects/flutter/homepage.png",
        tech: ["Flutter", "Unity", "Vuforia AR"],
        videoDemo: "https://www.youtube.com/embed/bijHhvLTaSA?si=xFvhbD0JeBL14J8E",
        description: [
            `Voor het vak Augmented Reality and Mobile App Development kregen we een projectopdracht. We mochten zelf kiezen wat we maakten, zolang het maar AR (Augmented Reality) bevatte via Unity en Vuforia. Ook moest er een API zijn voor communicatie, die dan gebruik moest maken van een JSON server. Dit alles moest uiteindelijk geïntegreerd worden in een Flutter applicatie.

            Dit was ook een teamopdracht, en wij hadden ervoor gekozen om een autoscanner te maken. De app herkende een auto, bijvoorbeeld een Lamborghini Urus, en zou hierover specificaties geven, met nog extra functionaliteiten die in het bijbehorende filmpje ontdekt kunnen worden.`
        ],
        demoDesc: `In de bijgevoegde live demo van de applicatie is te zien je hoe een auto wordt gescand en welke opties er dan beschikbaar zijn.`,
        contribution: `In dit project nam ik het volledige Unity-deel en Vuforia voor mijn rekening. Dit omvatte het trainen van de foto's van de auto's in Vuforia, die vervolgens in Unity moesten worden geïmporteerd. Het idee was dat zodra een auto herkend werd, er een 3D-model van die specifieke auto op het scherm zou verschijnen, samen met de bijbehorende informatie en een geluidje om het wat levendiger te maken. Ik had het ook zo opgezet dat gebruikers in de applicatie de kleur van de auto konden aanpassen, bijvoorbeeld naar groen. Als die specifieke auto dan gescand werd, zou het 3D-model de kleur hebben die men had ingesteld. Verder hield ik me bezig met de lay-out en het design van de applicatie.  
        
        Voor de toekomst zou de bestaande API vervangen kunnen worden door een echte backend in plaats van een JSON-server. Ook zouden bepaalde designopties verbeterd kunnen worden.`
    },

    {
        id: 4,
        title: "WTC Roland",
        url: "https://smob.smobwtcroland.be",
        image: "/assets/images/projects/php/homescherm.png",
        tech: ["PHP", "Laravel", "JS", "MySQL", "CSS", "Tailwind CSS"],
        screenshots: [
            {
                src: "/assets/images/projects/php/ploegenaanmelden.png",
                caption: "Ploegen aanmelden"
            },

        ],
        videoDemo: "https://www.youtube.com/embed/tcoWecZ4waA?si=sh3BDCwM-jkqEpm8",
        description: [`Voor de cursus Project PHP moesten we in teamverband een applicatie ontwikkelen voor onze klant, wielerclub WTC Roland. Deze club organiseert jaarlijks een wielerwedstrijd in Geel. De applicatie moest zowel de inschrijvingen ondersteunen als de nodige tools bieden voor de wedstrijddag zelf. Als eerste stap moest een team zich inschrijven. Vervolgens ontving het team een e-mail met het verzoek om het inschrijfgeld te betalen. Daarna controleerde de penningmeester of de betaling daadwerkelijk was voldaan.

                        Op de wedstrijddag moesten de teams zich aanmelden bij een aangewezen persoon. Deze bevestigde in de applicatie hun aanwezigheid en kende een rugnummer toe. Vervolgens werd ook een motor aan elk team toegewezen. Zodra de wedstrijd van start ging, registreerde iemand in de applicatie de rondetijden met een ingebouwde chronometer. De applicatie omvatte dus alle functionaliteiten die nodig zijn voor het organiseren van een wielerwedstrijd, inclusief essentiële tools voor tijdens de wedstrijd, zoals de chronometer.`],
        demoDesc: `In onderstaande live demo wordt kort de chronometer getoond.`,
        contribution: `Voor dit project ontwikkelde ik de chronometer. Dit proces kostte best veel tijd door diverse bugs, met name de uitdaging om de actuele tijd na het afklokken correct in de database op te slaan en dynamisch aan te passen aan het aantal rondes dat een specifiek team moest rijden. Hier heb ik de meeste tijd in gestoken, maar uiteindelijk is het allemaal gelukt.

Verder creëerde ik de aanmeldpagina voor de ploegen, waar teams op de wedstrijddag konden worden geregistreerd. Ook leverde ik een bijdrage aan het algemene design van de applicatie en loste ik diverse bugs op.`
    },
    {
        id: 5,
        title: "Receptzoeker",
        videoDemo: "https://www.youtube.com/embed/g0j-W8tAK6A?si=sWGPE0-GfK1U32YW",
        image: "/assets/images/projects/recipefinder/recipefinder.png",
        tech: ["MAUI", ".NET 8.0", "MySQL"],
        description: [
            `Dit project is een receptzoeker die groenten of fruit herkent en hiervoor recepten toont waarin het herkende ingrediënt wordt gebruikt. Daarnaast is er ook een mogelijkheid om een boodschappenlijst te maken. Hiervoor maakte ik gebruik van .NET MAUI, in combinatie met een API die de boodschappen bijhoudt. Ook wordt de Spoonacular API aangeroepen om recepten op te halen op basis van het herkende ingrediënt. Voor het herkennen van ingrediënten heb ik een Azure AI-model getraind. Het project is opgebouwd volgens best practices, waaronder het Repository Design Pattern en het gebruik van een navigation service.
        
        Het project zelf is niet het mooiste, maar het heeft zeker potentie. Er zou bijvoorbeeld een optie kunnen komen om meerdere ingrediënten te herkennen, waarna er specifiek recepten worden getoond die alleen deze ingrediënten bevatten. Ook het ontwerp kan nog mooier, dit project was puur bedoeld om de functionaliteit te demonstreren.        `

        ],
    },
    {
        id: 6,
        title: "Sociale Reisfoto App",
        image: "/assets/images/projects/ontwikkeling/ontwikkeling.jpg",
        tech: ["React Native", "Python Django", "PostgreSQL", "NativeWind"],
        description: [
            `Dit project is momenteel in ontwikkeling. Ik werk aan een app voor het delen van reisfoto’s, waarbij gebruikers hun vrienden kunnen volgen. Per stad kunnen foto’s worden geüpload die de moeite waard zijn om te delen. Zo zie je in één oogopslag welke vrienden welke steden hebben bezocht en welke foto’s ze daar hebben gemaakt. Dit kan anderen inspireren om zelf ook die bestemmingen te verkennen. Bij elke locatie kan ook een korte tekst toegevoegd worden, waardoor het een soort persoonlijk reisdagboek wordt. 
            
            Met dit project wil ik mijn vaardigheden in React Native verder ontwikkelen, en tegelijk meer ervaring opdoen met Django, waarmee ik tot nu toe nog maar beperkt heb gewerkt.`
        ],
    },
];


function ProjectModal({ project, onClose }) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [project]);

    if (!project) return null;

    if (project.id === 2) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="m-2 sm:m-4 mb-10 mt-32 sm:mt-24 relative bg-black/80 border border-white/30 rounded-2xl p-4 sm:p-10 shadow-2xl max-h-[96vh] sm:max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto  z-50 block text-4xl text-yellow-500 hover:text-yellow-400  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-violet-400 text-3xl font-bold mb-10  text-center">{project.title}</h3>
                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-8">
                            <div className="lg:col-span-4 flex flex-col justify-start gap-6">
                                <div className="relative border border-white/30 shadow-lg rounded-2xl p-6  backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                                    {project.description.map((desc, i) => (
                                        <p className="text-gray-200 " key={i}>{desc}</p>
                                    ))}
                                </div>
                                <div className="relative border border-white/30 shadow-lg rounded-2xl p-6  backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500 mb-4  drop-shadow-sm tracking-wide">Mijn bijdrage</h3>
                                    <p className="text-gray-200 whitespace-pre-line">{project.contribution}</p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col h-full justify-center items-center gap-6">
                                {project.screenshots && project.screenshots.map((s, i) => (
                                    <div
                                        key={i}
                                        className="relative w-full flex flex-col items-center border border-white/30 shadow-lg rounded-2xl p-4  backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200"
                                    >
                                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                        <img
                                            src={s.src}
                                            alt={s.caption || `Screenshot ${i + 1}`}
                                            className="rounded-xl shadow-lg max-h-72 object-contain mb-2"
                                        />
                                        {s.caption && (
                                            <span className="text-gray-200 text-sm">{s.caption}</span>
                                        )}
                                    </div>
                                ))}
                            </div>



                        </div>
                        <div className="lg:col-span-4 flex flex-col lg:flex-row h-full items-center gap-6 mt-6">
                            {project.woeps && project.woeps.map((s, i) => (
                                <div
                                    key={i}
                                    className="relative flex flex-col items-center border border-white/30 shadow-lg rounded-2xl p-4 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200 w-full lg:w-auto"
                                >
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <img
                                        src={s.src}
                                        alt={s.caption || `Screenshot ${i + 1}`}
                                        className="rounded-xl shadow-lg max-h-72 object-contain mb-2"
                                    />
                                    {s.caption && (
                                        <span className="text-gray-200 text-sm">{s.caption}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                    aria-label="Sluit modal"
                    tabIndex={-1}
                />
            </div>
        );
    }

    if (project.id === 3) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="m-2 sm:m-4 mb-10 mt-32 sm:mt-24 relative bg-black/80 border border-white/30 rounded-2xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto  z-50 block text-4xl text-yellow-500 hover:text-yellow-400  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-violet-400 text-3xl font-bold mb-10  text-center">{project.title}</h3>

                        <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 mb-8 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                            <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                            <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                            {project.description.map((desc, i) => (
                                <p className="text-gray-200 mb-3" key={i}>{desc}</p>
                            ))}
                        </div>

                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-8">
                            <div className="lg:col-span-5 flex flex-col justify-start gap-6 self-center">
                                <div className="  relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500 mb-4  drop-shadow-sm tracking-wide">Mijn bijdrage</h3>
                                    <p className="text-gray-200 whitespace-pre-line">{project.contribution}</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-6">
                                {project.videoDemo && (
                                    <div className="relative w-full rounded-2xl shadow-lg overflow-hidden border border-white/30 flex flex-col p-6 gap-4  backdrop-blur-md hover:border-violet-400 transition-colors duration-200">
                                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                        <h3 className="text-xl font-bold text-yellow-500 mb-4  drop-shadow-sm tracking-wide">Demo</h3>


                                        <div className="mb-2">
                                            <p className="text-gray-200 text-base leading-relaxed">
                                                {project.demoDesc}
                                            </p>
                                        </div>
                                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                            <iframe
                                                className="w-full h-full"
                                                src={project.videoDemo}
                                                title="YouTube demo video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                                aria-label="Stage project video"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                    aria-label="Sluit modal"
                    tabIndex={-1}
                />
            </div>
        );
    }
    if (project.id === 4) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="m-2 sm:m-4 mb-10 mt-32 sm:mt-24 relative bg-black/80 border border-white/30 rounded-2xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto  z-50 block text-4xl text-yellow-500 hover:text-yellow-400  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-violet-400 text-3xl font-bold mb-10 text-center">{project.title}</h3>

                        <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 mb-8 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                            <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                            <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                            {project.description.map((desc, i) => (
                                <p className="text-gray-200 mb-3 whitespace-pre-line" key={i}>{desc}</p>
                            ))}
                        </div>

                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-8">
                            <div className="lg:col-span-5 flex flex-col justify-start gap-6 self-center">
                                <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500 mb-4  drop-shadow-sm tracking-wide">Mijn bijdrage</h3>
                                    <p className="text-gray-200 whitespace-pre-line">{project.contribution}</p>
                                </div>
                            </div>

                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-6">
                                {project.videoDemo && (
                                    <div className="relative w-full rounded-2xl shadow-lg overflow-hidden border border-white/30 flex flex-col p-6 gap-4 backdrop-blur-md hover:border-violet-400 transition-colors duration-200">
                                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                        <h3 className="text-xl font-bold text-yellow-500   drop-shadow-sm tracking-wide">Demo chromometer</h3>
                                        <div className="mb-1">
                                            <p className="text-gray-200 text-base leading-relaxed">
                                                {project.demoDesc}
                                            </p>
                                        </div>
                                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                            <iframe
                                                className="w-full h-full"
                                                src={project.videoDemo}
                                                title="YouTube demo video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                                aria-label="Stage project video"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {project.screenshots && project.screenshots.length > 0 && (
                                <div className="lg:col-span-5 flex flex-col items-center gap-6">
                                    {project.screenshots.map((s, i) => (
                                        <div
                                            key={i}
                                            className="relative w-full flex flex-col items-center border border-white/30 shadow-lg rounded-2xl p-4 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200"
                                        >
                                            <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                            <img
                                                src={s.src}
                                                alt={s.caption || `Screenshot ${i + 1}`}
                                                className="rounded-xl shadow-lg max-h-auto object-contain mb-2"
                                            />
                                            {s.caption && (
                                                <span className="text-gray-200 text-sm">{s.caption}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-6">
                                <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-yellow-500 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-yellow-500 text-xl mb-3">Link website</h3>
                                    {project.url && (
                                        <div className="flex justify-center">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-center block w-full border border-yellow-500 text-yellow-500 font-semibold py-2 px-4 rounded hover:bg-yellow-500 hover:text-black transition"
                                            >
                                                Bezoek website
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                    aria-label="Sluit modal"
                    tabIndex={-1}
                />
            </div>
        );
    }
    if (project.id === 5) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="mt-32  sm:mt-16 m-4 relative bg-black/80 border border-white/30 rounded-2xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto z-50 block text-4xl text-yellow-500 hover:text-yellow-400 rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="text-violet-400 text-3xl font-bold mb-10 text-center">{project.title}</h3>

                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-8">
                            <div className="lg:col-span-4 relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200 flex flex-col justify-center">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                                {project.description.map((desc, i) => (
                                    <p className="text-gray-200 mb-3 whitespace-pre-line" key={i}>{desc}</p>
                                ))}
                            </div>
                            {project.videoDemo && (
                                <div className="lg:col-span-4 flex flex-col h-full justify-center items-center gap-6">
                                    <div className="relative w-full rounded-2xl shadow-lg overflow-hidden border border-white/30 flex flex-col p-6 gap-4 backdrop-blur-md hover:border-violet-400 transition-colors duration-200">
                                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                        <h3 className="text-xl font-bold text-yellow-500  drop-shadow-sm tracking-wide">Demo</h3>
                                        <div className="mb-2">
                                            <p className="text-gray-200 text-base leading-relaxed">
                                                {project.demoDesc}
                                            </p>
                                        </div>
                                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                            <iframe
                                                className="w-full h-full"
                                                src={project.videoDemo}
                                                title="YouTube demo video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                                aria-label="Stage project video"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                    aria-label="Sluit modal"
                    tabIndex={-1}
                />
            </div>
        );
    }

    if (project.id === 6) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="mt-32 sm:mt-0 m-4 relative bg-black/80 border border-white/30 rounded-2xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto z-50 block text-4xl text-yellow-500 hover:text-yellow-400  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-violet-400 text-3xl font-bold mb-10  text-center">{project.title}</h3>

                        <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 mb-8 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                            <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                            <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                            {project.description.map((desc, i) => (
                                <p className="text-gray-200 mb-3 whitespace-pre-line" key={i}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                    aria-label="Sluit modal"
                    tabIndex={-1}
                />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="relative z-50 w-full max-w-7xl mx-auto">
                <div
                    className="m-2 sm:m-4 mb-10 mt-32 sm:mt-24 relative bg-black/70 border border-white/30 rounded-2xl p-8 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-md overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-500 hover:text-yellow-400  rounded-full w-12 h-12 flex items-center justify-center p-2"
                        aria-label="Sluit modal"
                    >
                        &times;
                    </button>
                    <h3 className="lg:col-span-8 text-violet-400 text-3xl font-bold mb-10  text-center">{project.title}</h3>

                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-8">
                        <div className="lg:col-span-4 flex flex-col justify-start">
                            <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                <h3 className="text-xl font-bold text-yellow-500 mb-4   drop-shadow-sm tracking-wide">Projectoverzicht</h3>
                                {project.description.map((desc, i) => (
                                    <p className="text-gray-200 mb-3" key={i}>{desc}</p>
                                ))}
                            </div>
                        </div>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="lg:col-span-4 flex flex-col items-center gap-6">
                                {project.screenshots.map((s, i) => (
                                    <div
                                        key={i}
                                        className="relative w-full flex flex-col items-center border border-white/30 shadow-lg rounded-2xl p-4 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200"
                                    >
                                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                        <img
                                            src={s.src}
                                            alt={s.caption || `Screenshot ${i + 1}`}
                                            className="rounded-xl shadow-lg max-h-72 object-contain mb-2"
                                        />
                                        {s.caption && (
                                            <span className="text-gray-200 text-sm">{s.caption}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="lg:col-span-4 flex items-center">
                            {project.videoPromo && (
                                <div className="relative w-full rounded-2xl shadow-lg overflow-hidden border border-white/30 flex flex-col p-6 gap-4 backdrop-blur-md hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500   drop-shadow-sm tracking-wide">Promotie video</h3>
                                    <div className="">
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            Hier is een promotie filmpje te zien van onze applicatie.
                                        </p>
                                    </div>
                                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                        <iframe
                                            className="w-full h-full"
                                            src={project.videoPromo}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            aria-label="Stage project video"
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4 flex items-center">
                            {project.videoDemo && (
                                <div className="relative w-full rounded-2xl shadow-lg overflow-hidden border border-white/30 flex flex-col p-6 gap-4 backdrop-blur-md hover:border-violet-400 transition-colors duration-200">
                                    <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                    <h3 className="text-xl font-bold text-yellow-500   drop-shadow-sm tracking-wide">Demo</h3>

                                    <div className="mb-2">
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            {project.demoDesc}
                                        </p>
                                    </div>
                                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                        <iframe
                                            className="w-full h-full"
                                            src={project.videoDemo}
                                            title="YouTube demo video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            aria-label="Stage project video"
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-center">
                            <div className="relative border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden hover:border-violet-400 transition-colors duration-200">
                                <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                                <h3 className="text-xl font-bold text-yellow-500 mb-4  drop-shadow-sm tracking-wide">Mijn bijdrage</h3>
                                <p className="text-gray-200 whitespace-pre-line">{project.contribution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
                aria-label="Sluit modal"
                tabIndex={-1}
            />
        </div>
    );
}
export default function Projects() {
    const [selected, setSelected] = useState(null);

    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach(ref => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 80) {
                        ref.classList.add('animate-fade-in-up');
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="projects"
            className="bg-black/70 relative text-gray-200 pb-10 pt-10 px-6 sm:px-12 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0"
                aria-hidden="true"
            ></div>

            <div className="z-10  p-8 sm:p-10 rounded-lg max-w-7xl mx-auto ">
                <h2 className="text-4xl font-bold mb-8 text-violet-400 text-center drop-shadow-lg">
                    Projecten
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={el => cardRefs.current[i] = el}
                            className="opacity-0 backdrop-blur-md relative border-white/30 border rounded-2xl shadow-lg p-6 hover:border-violet-400 duration-200 cursor-pointer flex flex-col items-center transition"
                            onClick={() => setSelected(project)}
                            tabIndex={0}
                            aria-label={`Bekijk ${project.title}`}
                        >
                            <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl mb-4 shadow border border-white/30"
                            />
                            <h3 className="text-yellow-500 text-xl font-semibold mb-2 text-center">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1 justify-center">
                                {project.tech && project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-violet-400 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
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