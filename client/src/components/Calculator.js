import React from 'react';


export default function Calculator() {
    // let stockInput = document.getElementById("stock")
    //    let btn = document.getElementById('calcBtn')

    //    btn.addEventListener('click', function (){
    //     // let dividend = // this will be the data pulled in from the api 
    //     let holdings = document.getElementById('holdings').value;
    //     document.getElementById('gain').valu 
    //    })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a7c44cc221mshcba2a134652cbf7p18ad27jsn84acac37d6f5',
            'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
        }
    };

    fetch('https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=aapl', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  return (
    <div id="container">
        <div id="gain">
            Total Gain: 
        </div>
        <table id="table_id">

            <thead>
                <tr>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    Symbol<input id="stock"></input>
                    Holdings<input id="holdings"></input>
                    <button id="calcBtn">Calculate</button>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
