import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact, faJava, faDocker, faGithub, faGitlab, faFlutter, faJs} from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';


export default function AboutMe() {
    return (
        <>
        <section
            id="about_me"
            className="bg-cover bg-center text-gray-200 py-16 px-6 sm:px-12 "
            style={{ backgroundImage: "url('src/assets/images/profile-photo/testen.jpeg')" }}
            alt="Profile photo of Jef Ceulemans"

        >
            <div className="bg-black/70 p-8 sm:p-10 rounded-lg max-w-7xl mx-auto shadow-lg relative">
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <img
                        src="src/assets/images/profile-photo/testen.jpeg"
                        alt="Profile photo of Jef Ceulemans"
                        className="w-40 h-40 mt-6 object-cover rounded-full border-4 border-yellow-400 shadow-md "
                    />
                </div>

                <div className="mt-24">
                    <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">About Me</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-3">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3 ">My Background</h3>
                            <p className="text-gray-700">
                                Hello! My name is Jef Ceulemans, a 21-year-old student in my final year of Applied Computer Science,
                                specializing in Application Development. My interest in IT began at a young age, with a strong focus
                                on programming. That’s why I deliberately chose an IT-related track in my fifth and sixth years
                                of secondary school: IT and Networking.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-3" md:col-span-3>
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">My Studies</h3>
                            <p className="text-gray-700">
                                After secondary school, I started studying Applied Computer Science at Thomas More University of Applied Sciences.
                                In my second year, I chose the Application Development specialization. During the first year, we were introduced
                                to a wide range of subjects, and it quickly became clear that the software side — especially application development —
                                suited me best.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-4">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Hobbies and Free Time</h3>
                            <p className="text-gray-700">
                                I play badminton and have participated in tournaments in the past. I also used to volunteer
                                by teaching the youngest members of my club. Badminton teaches you to work independently as well 
                                as in a team,a good reflection of how I work. Both solo and collaborative environments suit me.
                                I also enjoy cooking, I started when I was about ten years old; even back then, I would spend an entire 
                                day in the kitchen preparing a three-course meal. Luckily, things go a bit faster now. In my free time, 
                                I try to improve myself in various areas within software development. I take courses and build my own 
                                applications to become better at it. I’m also currently following a course on hacking, for example. 
                                This way, I try to broaden my knowledge beyond just software development.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-2">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Student Job</h3>
                            <p className="text-gray-700">
                                Alongside my studies, I work as a student employee in the charcuterie/butcher department at Delhaize.
                                While not directly related to IT, this role strengthens my soft skills. I interact with customers daily,
                                requiring professionalism and a friendly attitude. It also teaches me to take initiative and collaborate within a team.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-2">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Future Plans</h3>
                            <p className="text-gray-700">
                                My goal is to become a successful software developer and work on innovative projects that make a real impact.
                                I'm particularly interested in full-stack development, and I look forward to continuing to grow my knowledge
                                and skills through hands-on experience.
                            </p>
                            
                        </div>

                        
                        <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-2">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Why I Do What I Do</h3>

                           {/*  <blockquote className="text-gray-700 italic text-lg border-l-4 pl-4 border-yellow-400">
                               "Learning never exhausts the mind."
                            </blockquote>
                            <p className="text-gray-600 text-right mt-2 font-medium">- Leonardo da Vinci</p>
 */}
                             <blockquote className="text-gray-700 italic text-lg border-l-4 pl-4 border-yellow-400 ">
                               "The only way to do great work is to love what you do."
                            </blockquote>
                            <p className="text-gray-600 text-right mt-2 font-medium">- Steve Jobs</p>
                                <p className="text-gray-700 mt-4">
                                Luckily, I’ve found that passion in software development.
                                </p>
                        </div>


                         <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 lg:col-span-2 flex flex-col justify-between  ">
                            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Curriculum vitae</h3>
                            <p className="text-gray-700 mb-4">Learn more about my education or work experience.</p>
                            <a href="src/assets/documents/cv/Curriculum vitae_Jef Ceulemans.pdf" target="_blank" rel="noopener noreferrer"
                            className=" mt-auto w-full block px-6 py-3 bg-yellow-400 text-black text-center rounded-md font-semibold hover:bg-yellow-500 transition">
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