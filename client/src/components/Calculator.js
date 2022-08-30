import React, { Component } from 'react';
// import '../'

export default function Calculator() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
    //     }
    // };
    // const autoComplete = 
    // fetch('https://fidelity-investments.p.rapidapi.com/v2/auto-complete?q=apple', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

  return (
    <div>
        <table id="table_id" class="display">
            <thead>
                <tr>
                    <th>Stock</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1 Data 1</td>
                    <td>Row 1 Data 2</td>
                </tr>
                <tr>
                    {/* <td>{autoComplete}</td> */}
                    <td>Row 2 Data 2</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
