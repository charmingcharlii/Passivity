import PieGraph from "./PieGraph"
import Calculator from "./Calculator"

const Portfolio = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <PieGraph />
            <Calculator />
        </div>
    )
}

export default Portfolio