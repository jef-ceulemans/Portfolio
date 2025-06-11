import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Internship() {
    return (
        <section
            id="internship"
            className="bg-black/70 relative text-gray-200 pt-10 pb-10 px-6 sm:px-12 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center blur-md scale-105 z-0"
                //style={{ backgroundImage: "url('/assets/images/homescreen/homescreen.jpg')" }}
                aria-hidden="true"
            ></div>

            <div className="relative z-10  p-8 sm:p-10 rounded-lg max-w-7xl mx-auto ">
                <h2 className="text-4xl font-bold mb-8 text-violet-400 text-center drop-shadow-lg">
                    Stage
                </h2>
                <div className="grid gap-8  lg:grid-cols-8">
                    <div className="relative  border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden lg:col-span-3 flex flex-col justify-center hover:border-violet-400 transition-colors duration-200">
                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                        <p className="text-gray-200 ">
                            Tijdens mijn stage aan het LaBRI-onderzoeksinstituut (Laboratoire Bordelais de Recherche en Informatique) in Bordeaux ontwikkelde ik samen met medestudent
                            Stijn De Busser een interactieve webapplicatie voor de visualisatie van microbiome-data. Deze tool maakte
                            het mogelijk om complexe taxonomische CSV-bestanden, afkomstig uit metagenomisch DNA-onderzoek, om te zetten naar
                            duidelijke, interactieve grafieken. <br /><br />
                            Gebruikers konden hiërarchische taxonomische structuren verkennen via een Icicle Plot en patiëntdata analyseren
                            met behulp van een Parallel Coordinates Plot, Boxplot en spreadsheetweergave, configureerbaar via een side-panel. De applicatie ondersteunt het vergelijken
                            van distributies van specifieke taxon tussen verschillende patiëntengroepen en biedt uitgebreide filter en
                            selectieopties voor een diepgaande analyse.
                        </p>
                    </div>

                    <div className="relative  border border-white/30 shadow-lg rounded-2xl p-6 backdrop-blur-md overflow-hidden lg:col-span-5 flex flex-col justify-center hover:border-violet-400 transition-colors duration-200">
                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                        <div className="mb-2">
                            <p className="text-gray-200 text-base">
                                In het bijgevoegde filmpje is een live-demo van de applicatie te zien.
                                De data die in deze demo wordt gebruikt, is afkomstig van bloedmonsters van patiënten met een HIV-diagnose.
                                In deze dataset zijn er twee patiëntgroepen: Responders, die positief reageren op de behandeling, en Non-Responders,
                                die niet op de behandeling reageren.
                            </p>
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner min-h-[200px]">
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

                    <div className="relative  border border-white/30 shadow-lg rounded-2xl p-8 backdrop-blur-md overflow-hidden max-w-3xl mx-auto lg:col-span-8 flex flex-col items-center justify-center hover:border-yellow-500 transition-colors duration-200">
                        <span className="pointer-events-none absolute top-0 left-0 w-full h-1/2 rounded-t-2xl bg-gradient-to-b from-white/20 to-transparent opacity-40" />
                        <h3 className="text-xl font-bold text-yellow-500 mb-4 text-center drop-shadow-sm tracking-wide">
                            Stage Documenten
                        </h3>
                        <p className="text-gray-200 text-center max-w-2xl mb-4 text-base ">
                            Hier vind je alle belangrijke documenten over mijn stage: het projectplan, het realisatiedocument (thesis) en mijn reflectie. Klik op een van de knoppen hieronder om het gewenste bestand te openen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                            <a
                                href="/assets/documents/stage/Project_Plan_Bordeaux_Internship.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-center flex items-center gap-2 px-5 py-3 text-yellow-500 border border-yellow-500 font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 group-hover:text-black transition" />
                                Project Plan
                            </a>
                            <a
                                href="/assets/documents/stage/Jef_Ceulemans_Realisatiedocument.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-center flex items-center gap-2 px-5 py-3 text-yellow-500 border border-yellow-500 font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 group-hover:text-black transition" />
                                Realisatiedocument (thesis)
                            </a>
                            <a
                                href="/assets/documents/stage/Jef_Ceulemans_Reflectie.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group text-center flex items-center gap-2 px-5 py-3 border-yellow-500 border text-yellow-500 font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:text-black transition"
                            >
                                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 group-hover:text-black transition" />
                                Reflectie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}