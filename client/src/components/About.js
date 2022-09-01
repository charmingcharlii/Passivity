import Avatar1 from "../assets/Avatar1.png"
import { FaTwitterSquare } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const About = () => {
    return (
        <div className="flex items-center justify-center p-36">

            <div className="border border-indigo-200 bg-slate-200 text-white font-bold rounded-lg border shadow-lg p-10">

                <div className="p-4 text-gray-600">
                    <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">What we do :</h1>
                    <h3 className="mb-8 text-center text-xl font-light text-indigo-900"> We compile all of the necessary dividend information for a stock you've purchased and track that data - so YOU don't have to. </h3>


                    <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Why?</div>
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900"> They say "the sooner you invest, the longer you give your money the chance to grow." But where do you start 🏁 ? Our mission is to make YOU the smartest, wealthiest investor you've ever been by arming you with what you need to know from the get-go.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Strategy</div>
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900">With thousands of stocks to choose from, and a million and 1 investing strategies out there, our goal is to help you sift through the data to find, organize, and track companies that match your dividend investment style, adding value 💸 to you and your future.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Design</div>
                                {/* maybe set the last sentence of this to '...all the information you need to fast track your portfolio' */}
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900"> Analysis paralysis is real - we took the data 🧩, and made it easy to read📘 by designing an easy access table that gives you all the information you need to get your portfolio started, and nothing you don't.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Development</div>
                                {/* we're always strive to develop new features... */}
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900">Our plan is to continue developing features that will help YOU digest technical company decisions and make more informed investements to drive the direction of your portfolio.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <header class="text-center mx-auto mb-12 border border-indigo-200 rounded-lg ">
                    <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                        <span class="font-light">Our</span> Team:
                        <div className=" container team flex">
                            <div className="container teamMember">
                                <img src={Avatar1} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                                <p class="text-sm text-gray-500 leading-relaxed font-light">Founder CEO</p>
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <FaTwitterSquare />
                                </a>
                                <a class="hover:text-blue-700" aria-label="Email link" href="#">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" aria-label="GitHub link" href="#">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" aria-label="LinkedIn link" href="#">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="container teamMember">
                                <img src={Avatar1} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                                <p class="text-sm text-gray-500 leading-relaxed font-light">Founder CEO</p>
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <FaTwitterSquare />
                                </a>
                                <a class="hover:text-blue-700" aria-label="Email link" href="#">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" aria-label="GitHub link" href="#">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" aria-label="LinkedIn link" href="#">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="container teamMember">
                                <img src={Avatar1} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                                <p class="text-sm text-gray-500 leading-relaxed font-light">Founder CEO</p>
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <FaTwitterSquare />
                                </a>
                                <a class="hover:text-blue-700" aria-label="Email link" href="#">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" aria-label="GitHub link" href="#">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" aria-label="LinkedIn link" href="#">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="container teamMember">
                                <img src={Avatar1} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                                <p class="text-sm text-gray-500 leading-relaxed font-light">Founder CEO</p>
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <FaTwitterSquare />
                                </a>
                                <a class="hover:text-blue-700" aria-label="Email link" href="#">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" aria-label="GitHub link" href="#">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" aria-label="LinkedIn link" href="#">
                                    <FaLinkedin />
                                </a>
                            </div>

                        </div>


                    </h2>
                </header>
            </div>
        </div>
    )
}

export default About