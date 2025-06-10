export default function Projects() {
    return (
            <section
            id="projects"
            className="relative text-gray-200 py-16 px-6 sm:px-12 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0"
                style={{ backgroundImage: "url('src/assets/images/homescreen/homescreen.jpg')" }}
                aria-hidden="true"
            ></div>

            <div className="relative z-10 bg-black/70 p-8 sm:p-10 rounded-lg max-w-7xl mx-auto shadow-2xl">
                <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center drop-shadow-lg">
                    Projecten
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-8">
                    <div className=" shadow-lg rounded-2xl p-6 border-2 hover:border-yellow-500  lg:col-span-3 flex flex-col justify-center">
                        <p className="text-white ">
                            Tijdens mijn stage aan het LaBRI-onderzoeksinstituut (Laboratoire Bordelais de Recherche en Informatique) in Bordeaux ontwikkelde ik samen met medestudent
                            Stijn De Busser een interactieve webapplicatie voor de visualisatie van microbiome-data. Deze tool maakte
                            het mogelijk om complexe taxonomische CSV-bestanden, afkomstig uit metagenomisch DNA-onderzoek, om te zetten naar
                            duidelijke, interactieve grafieken. <br /> <br />
                            Gebruikers konden hiërarchische taxonomische structuren verkennen via een Icicle Plot en patiëntdata analyseren
                            met behulp van een Parallel Coordinates Plot, Boxplot en spreadsheetweergave, configureerbaar via een side-panel. De applicatie ondersteunt het vergelijken
                            van distributies van specifieke taxon tussen verschillende patiëntengroepen en biedt uitgebreide filter en
                            selectieopties voor een diepgaande analyse.
                        </p>

                    </div>
                    <div className="lg:col-span-5 flex items-center">
                        <div className="w-full rounded-2xl shadow-lg overflow-hidden border-2 hover:border-yellow-500  flex flex-col p-6 gap-4">
                            <div className="mb-2">
                                <p className="text-white text-base leading-relaxed">
                                    In het bijgevoegde filmpje is een live-demo van de applicatie te zien.
                                    De data die in deze demo wordt gebruikt, is afkomstig van bloedmonsters van patiënten met een HIV-diagnose.
                                    In deze dataset zijn er twee patiëntgroepen: Responders, die positief reageren op de behandeling, en Non-Responders,
                                    die niet op de behandeling reageren.
                                </p>
                            </div>
                            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/WrFpk1QmaU4?si=2UcLEy_nxfLb2Ema"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    aria-label="Stage project video"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="  rounded-2xl p-10 border-2 hover-border-yellow-500 hover:border-yellow-500  lg:col-span-8 flex flex-col items-center justify-center ">
                        <h3 className="text-xl  font-bold text-yellow-400 mb-4 text-center drop-shadow-sm tracking-wide">
                             Stage Documenten
                        </h3>
                        <p className="text-white text-center max-w-2xl mb-4 text-base sm:text-lg">
                            Hier vind je alle belangrijke documenten over mijn stage: het projectplan, het realisatiedocument (thesis) en mijn reflectie. Klik op een van de knoppen hieronder om het gewenste bestand te openen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                            <a
                                href="/src/assets/documents/stage/ProjectPlan.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-yellow-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition drop-shadow"
                            >
                                <svg className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V2z" /><path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" /></svg>
                                Project Plan
                            </a>
                            <a
                                href="/src/assets/documents/stage/RealisatieDocument.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-yellow-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition drop-shadow"
                            >
                                <svg className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V2z" /><path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" /></svg>
                                Realisatiedocument (thesis)
                            </a>
                            <a
                                href="/src/assets/documents/stage/Reflectie.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-yellow-400 text-yellow-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition drop-shadow"
                            >
                                <svg className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 115.707 8.293L8 10.586V2z" /><path d="M3 16a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" /></svg>
                                Reflectie
                            </a>
                        </div>
                    </div>
                                        </div>

       
            </div>
        </section>
    );
}