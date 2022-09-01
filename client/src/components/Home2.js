import logo from "../assets/PassivityLogo2.png"
// Component's Base CSS
import './style.css';

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container pt-32 pb-32">

            <header className="home2 md:rounded-md p-12 border border-indigo-200">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto md:rounded-md">
                    <div className="px-4">
                        {/* using emojis as emphasis vs a word should be consis */}
                        <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black md:rounded-md ">
                            We know investing can sometimes feel like a hassle.
                        </h3>
                        <p className="md:rounded-md mt-4 text-stone-800 text-xl font-medium">
                            Here at passivity, we think investing doesn’t have to be that hard!
                        </p>
                    </div>
                    <div className="container">
                        <div className="box1 border border-indigo-200 md:rounded-md bg-slate-300 h-48 w-96 ">
                        </div>

                        <div className=" border border-indigo-200 md:rounded-md bg-white md:shadow-2xl -mt-60 - mx-2 p-12">
                            <div className="mx-auto">
                                <img className="object-cover h-48 w-96 " src={logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div >
                <div className="flex items-center justify-center pt-16 pb-16 ">
                    <section className="section-4 border border-indigo-200">
                        <div className="section-bottom">
                            <h2 className="section-bottom-title">Ready To Join our Community?</h2>
                            <Link className="bg-purple-500 btn section-btn" to="/login">Sign Up For Free</Link>
                        </div>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default Home