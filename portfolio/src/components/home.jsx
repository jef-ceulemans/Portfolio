import TypeWriter from "typewriter-effect"

export default function Home() {
    return (
        <>
        <div className="relative w-full h-[94vh]">
            <img src="/assets/images/homescreen/homescreen.jpg" alt="homescreen" className="w-full h-full object-cover" />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-shadow-md">Welkom op mijn portfolio </h1>
        <h2 className="text-2xl font-semibold">
            <TypeWriter options={{
            strings: ["Hallo, ik ben Jef",  "Ik ben een Software Developer", "Afstuderend in juni 2025"
    ],                autoStart:true,
                loop:true,
                pauseFor:800
            }} 
            />
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">

        <a href="#about_me" className="px-6 py-3 bg-transparent border border-yellow-400 text-yellow-400 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition">
            Over mij
        </a>

        <a href="#projects" className="px-6 py-3 bg-amber-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition" >
            Bekijk projecten
        </a>

        <a href="#contact" className="px-6 py-3 bg-transparent border border-yellow-400 text-yellow-400 rounded-md font-semibold hover:bg-yellow-400 hover:text-black transition">
            Neem contact op
        </a>

        </div>
        </div>
        </div>
        </>
    );
}