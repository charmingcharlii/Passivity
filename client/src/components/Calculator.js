import React from 'react';


export default function Calculator() {
    let stockInput = document.getElementById("stock")
    // fecth call for the stock itself 

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7c44cc221mshcba2a134652cbf7p18ad27jsn84acac37d6f5',
            'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
        }
    };
    
    fetch('https://fidelity-investments.p.rapidapi.com/v2/auto-complete?q=aapl', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  return (
    <div id="container">
        <table id="table_id" className="display absolute top-60">
            <thead>
                <tr>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <input id="stock">AAPL</input>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
