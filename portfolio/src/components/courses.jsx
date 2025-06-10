export default function Courses() {
    const certificates = [
        {
            title: "COBOL Programming with VSCode",
            institution: "IBM",
            link: "src/assets/images/certificaten/COBOL_Programming_with_VSCode_Badge20250111-25-opanrd.pdf"
        },
        {
            title: "Kotlin Cursus",
            institution: "Codecademy",
            link: "src/assets/images/certificaten/CursusKotlin.png"
        },
        {
            title: "Angular Cursus",
            institution: "Sololearn",
            link: "src/assets/images/certificaten/Jef_Ceulemans_Angular.pdf"
        },
        {
            title: "Kali Linux oefeningen",
            institution: "Coursera",
            link: "src/assets/images/certificaten/kali.png",
            note: "Geen officieel certificaat, dit is een screenshot van afgeronde oefeningen."
        },
        {
            title: "Swift tutorials",
            institution: "Apple",
            link: "https://developer.apple.com/tutorials/develop-in-swift/welcome-to-develop-in-swift-tutorials",
            note: "Reeks tutorials gevolgd, geen officieel certificaat."
        },
    ];

    return (
        <section id="courses" className="scroll-mt-16 py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-700/70 p-8 sm:p-10 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Behaalde Certificaten & Cursussen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, idx) => (
                            <div key={idx} className="bg-gray-100 shadow-lg rounded-2xl p-6 flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{cert.title}</h3>
                                <div className="text-sm text-gray-600 mb-2">
                                    {cert.institution}
                                </div>
                                {cert.note && (
                                    <div className="text-xs text-gray-500 italic mb-2">{cert.note}</div>
                                )}
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md text-center transition w-full mt-auto"
                                    >
                                        Bekijk {
                                            cert.title.toLowerCase().includes('tutorial')
                                                ? 'tutorial'
                                                : cert.title.toLowerCase().includes('screenshot') || cert.note?.toLowerCase().includes('screenshot')
                                                    ? 'screenshot'
                                                    : 'certificaat'
                                        }                  </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}