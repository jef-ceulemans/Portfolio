import React, { useState, useEffect } from "react";

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
      een projectplan, en het maken van mock-ups. Het programmeren van de applicatie gebeurde in een periode van drie 
      weken tijdens de projectweek in de examenperiode.`,
            `Het einddoel was een applicatie waarmee evenementen konden worden aangemaakt. 
      Als gebruiker kon je je inschrijven voor een evenement en aangeven of je chauffeur wilde zijn of niet. 
      Wanneer de deadline voor inschrijving naderde, kwam de AI in actie. Die analyseerde waar iedereen woonde en 
      wie er bereid was om te rijden. Op basis daarvan werden optimale routes opgesteld.`,
            `Als je chauffeur was, kreeg je een Google Maps-link met de route die je moest volgen om iedereen op te halen.
      Het doel van de applicatie was om een betere teamsfeer te creëren door samen te rijden met collega’s. 
      Het milieuaspect was mooi meegenomen: dankzij deze applicatie wordt niet alleen de teamgeest versterkt, 
      maar leveren de gebruikers ook een bijdrage aan een duurzamere mobiliteit.`
        ],
        demoDesc: `In de bijgevoegde live demo van de applicatie zie je hoe een evenement is aangemaakt en 
    hoe verschillende gebruikers zich hiervoor hebben ingeschreven. 
    Na de deadline heeft de AI meerdere carpools samengesteld met passagiers die, volgens de berekeningen, 
    het meest optimaal bij elkaar passen voor de rit.`,
        contribution: `Mijn grootste verwezenlijking in dit project was de integratie van de Google Maps API. Ik heb deze in 
de backend geïntegreerd, omdat het veiliger is om een API-key daar te bewaren in plaats van in de front-end. 
    Ik gebruikte deze Google API voor verschillende doeleinden. 

    Ik heb de API gebruikt om de lengte- en breedtegraad (longitude en latitude) van een adres te berekenen 
    en deze ook weer om te zetten naar een leesbaar adres. Zoals je in de onderstaande live demo kunt zien, voer ik een adres in. In de backend worden vervolgens de lengte- en breedtegraad van dit adres opgeslagen. 
    In de front-end wordt deze lengte- en breedtegraad weer omgezet naar een echt adres. Dit is zo gedaan omdat 
    de AI lengte- en breedtegraden nodig heeft. Bovendien is het een goede gewoonte om geen aparte velden in de 
    database aan te maken voor berekeningen die je kunt uitvoeren, op deze manier houden we alleen de lengte- en 
    breedtegraad bij.  

    Verder heb ik het welkomstscherm, het dashboard en de evenementenpagina gemaakt. Op die pagina kon je 
    je aanmelden voor een evenement en kiezen of je wel of geen chauffeur wilde zijn. Dit waren mijn grootste 
    bijdragen, maar ik heb hier en daar ook bugs opgelost en fouten hersteld.`
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
        contribution: `Mijn grootste verwezenlijking in dit project was het maken van de tijdschema's. 
Daarin kon je de planning van de stages per dag zien. Per stage zag je dan een tijdstabel van 
        welke artiesten daar die dag zouden optreden. Ook heb ik authenticatie toegevoegd via Auth0. 
        In de backend heb ik de API-routes beschermd zodat deze niet bereikt konden worden, buiten door 
        de applicatie zelf. Verder heb ik ook adminrechten voorzien voor bepaalde delen van de applicatie.
        Ook heb ik de line-up pagina gemaakt. Op deze pagina stonden alle artiesten die naar het festival zouden komen.
         Hier heb ik gebruikgemaakt van een Spotify API, die al in de backend geïntegreerd was door mijn medestudent. 
         Je kon ook op een artiest drukken om meer info over die artiest te vinden. Ik heb hier ook een iframe gebruikt 
         om via Spotify het meest bekende liedje van deze artiest te laten zien en af te spelen. Verder heb ik de algemene 
         layout van de applicatie gemaakt. Ik had een paar kleuren gedefinieerd in Tailwind zodat in de applicatie overal 
         dezelfde kleuren gebruikt zouden worden.`,
        screenshots: [
            {
                src: "/assets/images/projects/festival/artistinfo.png",
                caption: "Artiesten info"
            },
            {
                src: "/assets/images/projects/festival/planning.png",
                caption: "Planning"
            },

        ]
    },
    {
        id: 3,
        title: "Auto Scanner",
        image: "/assets/images/projects/flutter/homepage.png",
        tech: ["Flutter", "Unity", "Vuforia AR"],
        videoDemo: "https://www.youtube.com/embed/bijHhvLTaSA?si=xFvhbD0JeBL14J8E",
        description: [
            `Voor het vak Augmented Reality and Mobile App Development kregen we een projectopdracht. We mochten zelf kiezen wat we maakten, zolang het maar AR (Augmented Reality) bevatte via Unity en Vuforia. Ook moest er een API zijn voor communicatie, die dan gebruik moest maken van een JSON server. Dit alles moest uiteindelijk geïntegreerd worden in een Flutter applicatie.

            Dit was ook een teamopdracht, en wij hebben ervoor gekozen om een autoscanner te maken. De app herkent een auto, bijvoorbeeld een Lamborghini Urus, en zal hierover specificaties geven, met nog extra functionaliteiten die je in het bijbehorende filmpje kunt ontdekken.`
        ],
        demoDesc: `In de bijgevoegde live demo van de applicatie zie je hoe een auto wordt gescand en welke opties er dan beschikbaar zijn.`,
        contribution: `In dit project heb ik het volledige Unity-deel en Vuforia voor mijn rekening genomen. Dit omvatte het trainen van de foto's van de auto's in Vuforia, die vervolgens in Unity moesten worden geïmporteerd. Het idee was dat zodra een auto herkend werd, er een 3D-model van die specifieke auto op het scherm zou verschijnen, samen met de bijbehorende informatie én een geluidje om het wat levendiger te maken. Ik heb het ook zo opgezet dat je in Flutter de kleur van de auto kunt aanpassen, bijvoorbeeld naar groen. Als je dan die specifieke auto scant, zal het 3D-model de kleur hebben die jij hebt ingesteld. Verder heb ik me beziggehouden met de layout en het design van Flutter.  
        
        Voor de toekomst zou de bestaande API vervangen kunnen worden door een echte back-end in plaats van een JSON server. Ook zouden bepaalde designopties verbeterd kunnen worden.`
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
        description: [`Voor de cursus Project PHP moesten we in teamverband een applicatie maken voor onze klant, Wielerclub WTC Roland. Deze club organiseert elk jaar een wielerwedstrijd in Geel. De applicatie moest zowel de inschrijvingen ondersteunen als de nodige tools bieden voor tijdens de wedstrijddag zelf.

Als eerste stap moest een team zich inschrijven. Dit team zou dan een e-mail ontvangen met het verzoek om het inschrijfgeld te betalen. Hierna controleert de penningmeester of de betaling inderdaad is voldaan.

Op de wedstrijddag zelf moeten de teams zich aanmelden bij een aangewezen persoon. Deze persoon zal in de applicatie bevestigen dat ze aanwezig zijn en een rugnummer toewijzen. Vervolgens wordt er een motor toegewezen aan een team. Wanneer de wedstrijd begint, is er in de applicatie een chronometer die bijhoudt hoe lang elke ronde duurt.

De applicatie omvat dus alle functionaliteiten die nodig zijn voor het organiseren van een wielerwedstrijd, inclusief essentiële tools voor tijdens de wedstrijd, zoals de chronometer.`],
        demoDesc: `In onderstaande live demo wordt kort de chronometer getoond.`,
        contribution: `Voor dit project heb ik de chronometer gemaakt, wat best veel tijd kostte vanwege diverse bugs. De huidige tijd na het afklokken moest namelijk in de database bewaard worden en dynamisch aangepast worden aan het aantal rondes dat een specifiek team moest rijden. Hier heb ik de meeste tijd in gestoken, maar uiteindelijk is het allemaal gelukt.

Verder heb ik de ploegen aanmelden pagina ontwikkeld, waar je teams kon aanmelden op de dag van de wedstrijd. Ook heb ik meegewerkt aan het algemene design van de applicatie en diverse bugs opgelost.`
    },
    {
        id: 5,
        title: "Receptzoeker",
        videoDemo: "https://www.youtube.com/embed/g0j-W8tAK6A?si=sWGPE0-GfK1U32YW",
        image: "/assets/images/projects/recipefinder/recipefinder.png",
        tech: ["MAUI", ".NET 8.0", "MySQL"],
        description: [
            `Dit project is een receptzoeker die groenten of fruit herkent en hiervoor recepten toont waar dit ingrediënt in voorkomt. Ook is er een mogelijkheid om een boodschappenlijst te maken. Hiervoor heb ik gebruikgemaakt van MAUI met een API die je boodschappen bijhoudt. Hierbij wordt ook de API van Spoonacular aangeroepen om recepten te krijgen voor het herkende ingrediënt. Voor het herkennen van een ingrediënt heb ik een Azure AI-model getraind. Dit project maakt bovendien gebruik van best practices zoals het Repository Design Pattern en een navigation service
        
        Het project zelf is niet het mooiste, maar het heeft zeker potentie. Er zou bijvoorbeeld een optie kunnen komen om meerdere ingrediënten te herkennen, waarna er specifiek recepten worden getoond die alleen deze ingrediënten bevatten. Ook het ontwerp kan nog mooier, dit project was puur bedoeld om de functionaliteit te demonstreren.        `

        ],
    },
    {
        id: 6,
        title: "Sociale Reisfoto App",
        image: "/assets/images/projects/ontwikkeling/ontwikkeling.jpg",
        tech: ["React Native", "Python Django", "PostgreSQL", "NativeWind"],
        description: [
            `Dit project is momenteel in ontwikkeling. Ik ben momenteel bezig met het ontwikkelen van een app voor het delen van reisfoto’s. Het idee is dat je je vrienden kunt volgen binnen de app.
Per stad kun je foto’s uploaden die je de moeite waard vindt om te delen. Zo zie je duidelijk welke vrienden op welke plekken zijn geweest en welke foto's ze daar hebben gemaakt. Dit kan je inspireren om zelf ook die bestemmingen te bezoeken.
Daarnaast kun je bij elke locatie een stukje tekst toevoegen, zo wordt het ook een soort persoonlijk reisdagboek.

Ik maak deze app om mijn skills in React Native te verbeteren, maar ook om eens uitgebreid met Django te werken. Ik heb namelijk nog maar weinig ervaring met Django.`
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
                            <div className="lg:col-span-4 flex flex-col justify-start">
                                <div className="mb-6 p-6 border-2 hover:border-yellow-500 shadow-lg rounded-2xl bg-gray-700">
                                    {project.description.map((desc, i) => (
                                        <p className="text-white mb-3" key={i}>{desc}</p>
                                    ))}
                                </div>
                                <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl mb-3">Mijn bijdrage</h3>
                                    <p className="text-white">{project.contribution}</p>
                                </div>
                            </div>
                            <div className="lg:col-span-4 flex flex-col h-full justify-center items-center gap-6">
                                {project.screenshots && project.screenshots.map((s, i) => (
                                    <div key={i} className="w-full flex flex-col items-center">
                                        <img
                                            src={s.src}
                                            alt={s.caption || `Screenshot ${i + 1}`}
                                            className="rounded-xl shadow-lg max-h-72 object-contain mb-2 border-2 hover:border-yellow-500"
                                        />
                                        {s.caption && (
                                            <span className="text-white text-sm">{s.caption}</span>
                                        )}
                                    </div>
                                ))}
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

    if (project.id === 3) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className="mb-6 p-6 border-2 hover:border-yellow-500 shadow-lg rounded-2xl bg-gray-700">
                            {project.description.map((desc, i) => (
                                <p className="text-white mb-3 " key={i}>{desc}</p>
                            ))}
                        </div>
                        <div className="grid gap-8 lg:grid-cols-8">
                            <div className="lg:col-span-5 flex flex-col h-full justify-center gap-8">
                                <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl mb-3">Mijn bijdrage</h3>
                                    <p className="text-white whitespace-pre-line">{project.contribution}</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-8">
                                {project.videoDemo && (
                                    <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500 flex flex-col p-6 gap-4 bg-gray-700">
                                        <h3 className="text-yellow-400 text-xl ">Demo</h3>
                                        <div className="mb-2">
                                            <p className="text-white text-base leading-relaxed">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className="mb-6 p-6 border-2 hover:border-yellow-500 shadow-lg rounded-2xl bg-gray-700">
                            {project.description.map((desc, i) => (
                                <p className="text-white mb-3 " key={i}>{desc}</p>
                            ))}
                        </div>
                        <div className="grid gap-8 lg:grid-cols-8">
                            <div className="lg:col-span-5 flex flex-col h-full justify-center gap-8">
                                <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl mb-3">Mijn bijdrage</h3>
                                    <p className="text-white whitespace-pre-line">{project.contribution}</p>
                                </div>
                            </div>
                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-8">
                                {project.videoDemo && (
                                    <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500 flex flex-col p-6 gap-4 bg-gray-700">
                                        <h3 className="text-yellow-400 text-xl ">Demo chromometer</h3>
                                        <div className="mb-2">
                                            <p className="text-white text-base leading-relaxed">
                                                {project.demoDesc}
                                            </p>
                                        </div>
                                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner ">
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
                                <div className="lg:col-span-5 flex flex-col items-center gap-4">
                                    {project.screenshots.map((s, i) => (
                                        <div key={i} className="w-full flex flex-col items-center">
                                            <img
                                                src={s.src}
                                                alt={s.caption || `Screenshot ${i + 1}`}
                                                className="rounded-xl shadow-lg max-h-auto object-contain mb-2 border-2 hover:border-yellow-500"
                                            />
                                            {s.caption && (
                                                <span className="text-white text-sm">{s.caption}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            )}
                            <div className="lg:col-span-3 flex flex-col h-full justify-center gap-8">
                                <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl mb-3">Link website</h3>
                                    {project.url && (
                                        <div className="flex justify-center">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-center block w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded transition"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
                            <div className="lg:col-span-4 flex flex-col justify-start">
                                <div className=" p-6 border-2 hover:border-yellow-500 shadow-lg rounded-2xl bg-gray-700">
                                    {project.description.map((desc, i) => (
                                        <p className="text-white mb-3 whitespace-pre-line" key={i}>{desc}</p>
                                    ))}
                                </div>
                                      

                            </div>
                            <div className="lg:col-span-4 flex items-center">
                            {project.videoDemo && (
                                <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500 flex flex-col p-6 gap-4 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl">Demo</h3>
                                    <div className="mb-2">
                                        <p className="text-white text-base leading-relaxed">
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

    if (project.id === 6) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
                <div className="relative z-50 w-full max-w-7xl mx-auto">
                    <div className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                            aria-label="Sluit modal"
                        >
                            &times;
                        </button>
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className=" p-6 border-2 hover:border-yellow-500 shadow-lg rounded-2xl bg-gray-700">
                            {project.description.map((desc, i) => (
                                <p className="text-white mb-3 whitespace-pre-line " key={i}>{desc}</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm">
            <div className="relative z-50 w-full max-w-7xl mx-auto">
                <div
                    className="bg-gray-700/70 rounded-lg p-8 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                >
                    <button
                        onClick={onClose}
                        className="sticky top-0 right-0 ml-auto mb-2 z-50 block text-4xl text-yellow-400 hover:text-yellow-200  rounded-full w-12 h-12 flex items-center justify-center p-2"
                        aria-label="Sluit modal"
                    >
                        &times;
                    </button>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
                        <h3 className="lg:col-span-8 text-yellow-400 text-3xl font-bold mb-6 text-center">{project.title}</h3>
                        <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 lg:col-span-4 flex flex-col justify-center bg-gray-700">
                            {project.description.map((desc, i) => (
                                <p className="text-white mb-3" key={i}>{desc}</p>
                            ))}
                        </div>

                        {project.screenshots && project.screenshots.length > 0 && (
                            <div className="lg:col-span-4 flex flex-col items-center gap-4">
                                {project.screenshots.map((s, i) => (
                                    <div key={i} className="w-full flex flex-col items-center">
                                        <img
                                            src={s.src}
                                            alt={s.caption || `Screenshot ${i + 1}`}
                                            className="rounded-xl shadow-lg max-h-72 object-contain mb-2 border-2 hover:border-yellow-500"
                                        />
                                        {s.caption && (
                                            <span className="text-white text-sm">{s.caption}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="lg:col-span-4 flex items-center">
                            {project.videoPromo && (
                                <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500 flex flex-col p-6 gap-4 bg-gray-700">
                                    <div className="mb-2">
                                        <p className="text-white text-base leading-relaxed">
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
                                <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500 flex flex-col p-6 gap-4 bg-gray-700">
                                    <h3 className="text-yellow-400 text-xl">Demo</h3>
                                    <div className="mb-2">
                                        <p className="text-white text-base leading-relaxed">
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
                        <div className="shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500 lg:col-span-4 flex flex-col justify-center bg-gray-700">
                            <h3 className="text-yellow-400 text-xl mb-3">Mijn bijdrage</h3>
                            <p className="text-white">{project.contribution}</p>
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

    return (
        <section
            id="projects"
            className="relative text-gray-200 py-16 px-6 sm:px-12 overflow-hidden "
        >
            <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0 "
                //style={{ backgroundImage: "url('/assets/images/homescreen/homescreen.jpg')" }}
                aria-hidden="true"
            ></div>

            <div className="relative z-10 bg-gray-700/70 p-8 sm:p-10 rounded-lg max-w-7xl mx-auto shadow-2xl">
                <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center drop-shadow-lg">
                    Projecten
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-yellow-500 cursor-pointer flex flex-col items-center transition bg-gray-950/70"
                            onClick={() => setSelected(project)}
                            tabIndex={0}
                            aria-label={`Bekijk ${project.title}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl mb-4 shadow"
                            />
                            <h3 className="text-yellow-400 text-xl font-semibold mb-2 text-center">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2 mb-1 justify-center">
                                {project.tech && project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow"
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
        </section>
    );
}