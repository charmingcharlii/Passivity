import React, { Component } from 'react';
// import '../'

export default function Calculator() {

    // fecth call for the stock itself 
    const autoComplete = 
    fetch('https://fidelity-investments.p.rapidapi.com/v2/auto-complete?q=apple', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    //  fetch orders for corresponding stocks 
    const orders = 
    fetch('https://fidelity-investments.p.rapidapi.com/market/get-orders', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    //  fetch call for the sector of selected stock 
    const sector = 
    fetch('https://fidelity-investments.p.rapidapi.com/market/get-sectors', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  return (
    <div>
        <table id="table_id" class="display">
            <thead>
                <tr>
                    <th>Stocks</th>
                    <th>Sector</th>
                    <th>Orders</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{autoComplete}</td>
                    <td>{sector}</td>
                    <td>{orders}</td>
                </tr>
                <tr>
                    <td>{autoComplete}</td>
                    <td>{sector}</td>
                    <td>{orders}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
