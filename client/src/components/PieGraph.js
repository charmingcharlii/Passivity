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
    pieHole: 0.5,
    is3D: false,
};

export function PieGraph() {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
