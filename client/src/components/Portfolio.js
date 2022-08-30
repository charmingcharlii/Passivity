import PieGraph from "./PieGraph"
import Calculator from "./Calculator"

const Portfolio = () => {
    return (
        <div className="flex items-center justify-center h-screen">

            <div className="bg-slate-200 text-slate-500 font-bold rounded-lg border shadow-lg p-10">

                <PieGraph />
                <Calculator />
            </div>

        </div>
    )
}

export default Portfolio