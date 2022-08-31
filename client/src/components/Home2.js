import logo from "../assets/PassivityLogo.png"
// Component's Base CSS
import './style.css';

const Home = () => {
    return (
        <div class="container pt-48">

            <header className=" home2 md:rounded-md p-12 border border-indigo-200">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto md:rounded-md">
                    <div className="px-4">
                        <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black md:rounded-md ">
                            We know investing can sometimes feel like a really hard 🧩.
                        </h3>
                        <p className="md:rounded-md mt-4 text-stone-800 text-xl font-medium">
                            Here at passivity we feel that, investing doesn’t have to be that hard!
                        </p>
                    </div>
                    <div className=" ">
                        <div className=" border border-indigo-200 transform md:rounded-md absolute bg-slate-300 transform -translate-x-10 relative h-64 ">
                        </div>

                        <div className=" border border-indigo-200 transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12 space-y-2">
                            <div className="mx-auto">
                                <img className="object-cover h-48 w-96 " src={logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div >
                <div class="flex items-center justify-center pt-16 pb-16 ">
                    <section class="section-4 border border-indigo-200">
                        <div class="section-bottom">
                            <h2 class="section-bottom-title">Ready To Join our Community?</h2>
                            <a class="bg-purple-500 btn section-btn" href="#">Sign Up For Free</a>
                        </div>
                    </section>
                </div>
            </header>
            <main>
                {/* <div class="flex items-center justify-center pb-32">
                    <section class="section-4">
                        <div class="section-bottom">
                            <h2 class="section-bottom-title">Ready To Join our Community?</h2>
                            <a class="btn section-btn" href="#">Sign Up For Free</a>
                        </div>
                    </section>
                </div> */}
            </main>


        </div>
    )
}

export default Home