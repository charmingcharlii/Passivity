import PieGraph from "./PieGraph"
import Calculator from "./Calculator"
import CalcEntry from './CalcEntry';
import Table from './Table';

const Portfolio = () => {
    return (
        <div className="flex items-center justify-center h-screen">

            <div className="bg-slate-200 text-slate-500 font-bold rounded-lg border shadow-lg p-10">

                <PieGraph />
                <Calculator />
                <CalcEntry />
                <Table />
            </div>
        </div>
    )
}

export default Portfolio