import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Sector", "% of portfolio"],
    ["1", 11],
    ["2", 2],
    ["3", 2],
    ["4", 2],
    ["5", 7],
];

export const options = {
    title: "Sector Diversification",
    is3D: true,
};

export default function PieGraph() {
    return (
        <Chart
            chartType="PieChart"
            width="auto"
            height="auto"
            data={data}
            options={options}
        />
    );
}
