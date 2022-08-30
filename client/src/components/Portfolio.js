import PieGraph from "./PieGraph"
import Calculator from "./Calculator"
import CalcEntry from './CalcEntry';

import { GET_USER } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from "react";

const Portfolio = () => {
    const [userInfo] = useQuery(GET_USER)
    const [user, setUser] = useState()
    useEffect(() => {
        // setUser(userInfo())
        console.log(user)
    },[])

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="bg-slate-200 text-slate-500 font-bold rounded-lg border shadow-lg p-10">

                <PieGraph />
                <Calculator />
                <CalcEntry />

            </div>

        </div>
    )
}

export default Portfolio