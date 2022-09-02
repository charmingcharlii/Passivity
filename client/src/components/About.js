import AvatarM from "../assets/Avatar1.png"
import AvatarD from "../assets/AvatarD.png"
import AvatarTJ from "../assets/AvatarTJ.png"
import AvatarV from "../assets/AvatarV.png"
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const About = () => {
    return (
        <div className="flex items-center justify-center container pt-32 pb-32">

            <div className="border border-indigo-200 bg-slate-200 text-white font-bold rounded-lg border shadow-lg p-10 mt-32">

                <div className="p-4 text-gray-600">
                    <h1 className="mb-4 text-center text-3xl font-bold text-indigo-900">What we do :</h1>
                    <h3 className="mb-8 w-1/2 mx-auto text-center text-xl font-light text-indigo-900"> We compile all of the necessary dividend information for a stock you've purchased and track that data - so YOU don't have to. </h3>


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
                                {/* maybe set the last sentence of this to '...all the information you need to fast track your portfolio' emoji options: 📊 📈 */}
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900"> Analysis paralysis is real - we take the data 📈 and make it easy to read 📘 with an easy access table that gives you all the info you need to fast track your portfolio.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Development</div>
                                {/* we're always striving to develop new features... */}
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900">We're always striving to develop new features to help YOU digest technical company decisions, make more informed investements, and drive the direction of your portfolio.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* this will be the new team section */}
                <header className="p-4 text-gray-600 border border-indigo-200 rounded-lg">
                    <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                        <span class="font-light">Our</span> <span class="text-indigo-700">Team:</span>
                    </h2>

                    <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                        <li className="flex">
                            <div className="container teamMember">
                                <img src={AvatarD} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Devin Sinitiere</p>
                                <a class="hover:text-blue-700" target="_blank" aria-label="Email link" href="mailto:dsinitiere@outlook.com">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="GitHub link" href="https://github.com/Chromodyne">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="LinkedIn link" href="https://www.linkedin.com/in/devin-sinitiere-78224295/">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="container teamMember">
                                <img src={AvatarM} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Michael Gonzalez</p>
                                <a class="hover:text-blue-700" target="_blank" aria-label="Email link" href="mailto:mikegonzo.dev@gmail.com">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="GitHub link" href="https://github.com/mike-gonz0">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="LinkedIn link" href="https://www.linkedin.com/in/mike-gonz0/">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="container teamMember">
                                <img src={AvatarTJ} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Thomas (TJ) Wetmore</p>
                                <a class="hover:text-blue-700" target="_blank" aria-label="Email link" href="mailto:tjwetmore34@gmail.com">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="GitHub link" href="https://github.com/bradtraversy/react-crash-2021">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="LinkedIn link" href="https://www.linkedin.com/in/thomas-wetmore-548b75151/">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="container teamMember">
                                <img src={AvatarV} class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"></img>
                                <p class="text-lg leading-normal font-bold mb-1">Victoria Dunlap</p>
                                <a class="hover:text-blue-700" target="_blank" aria-label="Email link" href="mailto:victoriacdunlap@gmail.com">
                                    <MdAlternateEmail />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="GitHub link" href="https://github.com/VictoriaDunlap">
                                    <FaGithub />
                                </a>
                                <a class="hover:text-blue-700" target="_blank" aria-label="LinkedIn link" href="https://www.linkedin.com/in/victoria-dunlap/">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </li>
                    </ul>
                </header>

            </div >
        </div >
    )
}

export default About