import TypeWriter from "typewriter-effect"

export default function Home() {
    return (
        <>
        <div className="relative w-full h-[94vh]">
            <img src="/assets/images/homescreen/homescreen.jpg" alt="homescreen" className="w-full h-full object-cover" />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/70 text-center px-4">
         <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
    Welkom op mijn <span className="text-violet-400">portfolio</span>
  </h1>
  <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
    <span className="inline-block border-b-4 border-violet-600 pb-1">
      <TypeWriter
        options={{
          strings: [
            "Hallo, ik ben Jef",
            "Ik ben een Software Developer",
            "Afstuderend in juni 2025"
          ],
          autoStart: true,
          loop: true,
          pauseFor: 800
        }}
      />
    </span>
  </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">

        <a href="#about_me" className="px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition">
            Over mij
        </a>

        <a href="#projects" className="px-6 py-3 bg-violet-600 text-white rounded-md font-semibold hover:bg-violet-500 transition" >
            Bekijk projecten
        </a>

        <a href="#contact" className="px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 rounded-md font-semibold hover:bg-yellow-500 hover:text-black transition">
            Neem contact op
        </a>

        </div>
        </div>
        </div>
        </>
    );
}