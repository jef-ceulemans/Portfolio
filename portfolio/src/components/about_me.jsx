import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate, faBookOpen, faHeart, faBriefcase,faBullseye,faQuoteLeft,faFilePdf} from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';

export default function AboutMe() {
    return (
        <>
        <section
            id="about_me"
            className="bg-cover bg-center text-gray-200 py-16 px-6 sm:px-12 "
            //style={{ backgroundImage: "url('src/assets/images/profile-photo/testen.jpeg')" }}
            alt="Profile photo of Jef Ceulemans"
        >
            <div className="bg-gray-700/70 p-8 sm:p-10 rounded-lg max-w-7xl mx-auto shadow-lg relative">
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <img
                        src="src/assets/images/profile-photo/testen.jpeg"
                        alt="Profile photo of Jef Ceulemans"
                        className="w-40 h-40 mt-6 object-cover rounded-full border-4 border-yellow-400 shadow-md"
                    />
                </div>

                <div className="mt-24">
                    <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Over mij</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6   lg:col-span-3">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faUserGraduate} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Mijn Achtergrond</h3>
                            </div>
                            <p className="text-gray-700">
                                Hallo! Mijn naam is Jef Ceulemans, een 21-jarige student in mijn laatste jaar Toegepaste Informatica,
                                met als specialisatie Applicatieontwikkeling. Mijn interesse in IT begon al op jonge leeftijd, met een sterke focus
                                op programmeren. Daarom koos ik bewust voor een IT-gerelateerde studierichting in mijn vijfde en zesde jaar
                                van het middelbaar: IT en Netwerken.
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6  lg:col-span-3">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faBookOpen} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Mijn Studies</h3>
                            </div>
                            <p className="text-gray-700">
                                Na het middelbaar ben ik gestart met de opleiding Toegepaste Informatica aan Thomas More Hogeschool.
                                In mijn tweede jaar koos ik de specialisatie Applicatieontwikkeling. Tijdens het eerste jaar maakten we kennis
                                met een breed scala aan onderwerpen, en het werd al snel duidelijk dat de softwarekant — vooral applicatieontwikkeling —
                                het beste bij mij paste.
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6  lg:col-span-4">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faHeart} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Hobby's en Vrije Tijd</h3>
                            </div>
                            <p className="text-gray-700">
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

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 lg:col-span-2">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faBriefcase} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Studentenjob</h3>
                            </div>
                            <p className="text-gray-700">
                                Naast mijn studies werk ik als jobstudent op de charcuterie/slagerij-afdeling bij Delhaize.
                                Hoewel niet direct IT-gerelateerd, versterkt deze rol mijn soft skills. Ik heb dagelijks interactie met klanten,
                                wat professionaliteit en een vriendelijke houding vereist. Het leert me ook initiatief te nemen en samen te werken binnen een team.
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 lg:col-span-2">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faBullseye} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Toekomstplannen</h3>
                            </div>
                            <p className="text-gray-700">
                                Mijn doel is om een succesvolle softwareontwikkelaar te worden en te werken aan innovatieve projecten die een echte impact hebben.
                                Ik ben bijzonder geïnteresseerd in full-stack ontwikkeling en kijk ernaar uit om mijn kennis
                                en vaardigheden verder te ontwikkelen door praktijkervaring op te doen.
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 lg:col-span-2">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Waarom ik doe wat ik doe</h3>
                            </div>
                            <blockquote className="text-gray-700 italic text-lg border-l-4 pl-4 border-yellow-400 ">
                               "The only way to do great work is to love what you do."
                            </blockquote>
                            <p className="text-gray-600 text-right mt-2 font-medium">- Steve Jobs</p>
                            <p className="text-gray-700 mt-4">
                                Gelukkig heb ik die passie gevonden in softwareontwikkeling.
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between">
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faFilePdf} size="lg" className="text-yellow-500 mr-3" />
                                <h3 className="text-xl font-semibold text-yellow-600">Curriculum vitae</h3>
                            </div>
                            <p className="text-gray-700 mb-4">Ontdek meer over mijn opleiding en werkervaring.</p>
                            <a href="src/assets/documents/cv/Curriculum vitae_Jef Ceulemans.pdf" target="_blank" rel="noopener noreferrer"
                                className="mt-auto w-full block px-6 py-3 bg-yellow-400 text-black text-center rounded-md font-semibold hover:bg-yellow-500 transition"
                            >
                                Open Curriculum vitae
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Skills/>
        </>
    );
}