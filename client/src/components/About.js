const About = () => {
    return (
        <div class="flex items-center justify-center h-screen">

            <div class="bg-slate-200 text-white font-bold rounded-lg border shadow-lg p-10">

                <div class="p-4 text-gray-600">
                    <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">What we do :</h1>
                    <h3 class="mb-8 text-center text-xl font-light text-indigo-900"> Basically, we compile all of the necessary dividend information for a given stock you provide, and we track that data - so YOU don't have to. </h3>


                    <ul class="grid place-content-center sm:grid-cols-2 gap-8">
                        <li class="flex">
                            <div class="px-4 text-5xl font-extralight text-indigo-700">01.</div>
                            <div>
                                <div class="text-xl font-bold text-indigo-800">Why?</div>
                                <p class="max-w-xs py-2 font-light text-sm text-indigo-900"> They say, the sooner you invest, the longer you give your money the chance to grow. But, where do you start 🏁 ? Our mission is to make YOU the smartest, wealthiest investor you've ever been. By arming you with what you need to know from the get-go.</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="px-4 text-5xl font-extralight text-indigo-700">02.</div>
                            <div>
                                <div class="text-xl font-bold text-indigo-800">Strategy</div>
                                <p class="max-w-xs py-2 font-light text-sm text-indigo-900">With thousands of stocks to choose from, and a million and 1 investing strategies out there our goal is to help you sift through the data and find, organize, and track companies that match your dividend investment style and add value 💸 to you and your future.</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="px-4 text-5xl font-extralight text-indigo-700">03.</div>
                            <div>
                                <div class="text-xl font-bold text-indigo-800">Design</div>
                                <p class="max-w-xs py-2 font-light text-sm text-indigo-900"> Analysis paralysis is a real thing - we took the data 🧩, and made it easy to 📘 by designing an easy access table that will give you all the information you need to get your portfolio started, and nothing you don't.
                                </p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="px-4 text-5xl font-extralight text-indigo-700">04.</div>
                            <div>
                                <div class="text-xl font-bold text-indigo-800">Development</div>
                                <p class="max-w-xs py-2 font-light text-sm text-indigo-900">Our plan is to continue todevelope features that will help YOU digest technical company decision, and make better informed decisions on how to drive the direction of your portfolio.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About