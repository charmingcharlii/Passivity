const About = () => {
    return (
        <div className="flex items-center justify-center p-20">

            <div className="border border-indigo-200 bg-slate-200 text-white font-bold rounded-lg border shadow-lg p-10">

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
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900"> Analysis paralysis is real - we took the data 🧩, and made it easy to read📘 by designing an easy access table that gives you all the information you need to get your portfolio started, and nothing you don't.
                                </p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
                            <div>
                                <div className="text-xl font-bold text-indigo-800">Development</div>
                                {/* we're always striving to develop new features... */}
                                <p className="max-w-xs py-2 font-light text-sm text-indigo-900">Our plan is to continue developing features that will help YOU digest technical company decisions and make more informed investements to drive the direction of your portfolio.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <section class="section section-one  border border-indigo-200 ">
                    <div class="section-text">
                        <h2 class="section-title">Grow Together</h2>
                        <p class="section-paragraph">
                            Generate meaningful discussions with our audience and build a
                            strong, loyal community. Think of the insightful conversations you
                            miss out on with a feedback form.
                        </p>
                    </div>
                </section>
            </div>



        </div>
    )
}

export default About