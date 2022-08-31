import logo from "../assets/PassivityLogo.png"

const Home = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="transform md:rounded-md py-20 bg-stone-100 my-20">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto">
                    <div className="px-4">
                        <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
                            We know investing can sometimes feel like a really hard 🧩.
                        </h3>
                        <p className="mt-4 text-stone-800 text-xl font-medium">
                            Here at passivity we feel that, investing doesn’t have to be that hard!
                        </p>
                    </div>
                    <div>
                        <div className="transform md:rounded-md absolute bg-slate-300 transform -translate-x-10 relative h-64">
                        </div>

                        <div className="transform md:rounded-md  bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12 space-y-2">
                            <div className="mx-auto">
                                <img className="object-cover h-48 w-96 " src={logo} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Home