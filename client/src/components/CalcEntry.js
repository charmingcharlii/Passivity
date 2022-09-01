import { useEffect, useState } from 'react';
const CalcEntry = ({ symbol, holding }) => {
  const [avgStockPrice, setAvgStockPrice] = useState(0)
  const [base, setBase] = useState(0)
  // creates the fetch call from user input 
  let userInput = 'AAPL' // will be user input 
  let fetchCall = `https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=${userInput}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ec6cf3aa6msh04ad88a208dda4ap1e0104jsn10035a179610',
      'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
    }
  };

  //If you want to run this ONCE when the component loads || if you want this to run only when something in your state changes, useEffect!
  useEffect(() => {
    runFetchResponse();
  }, [])

  const getFetchResponse = async (fetchCall, userInputShares) => {
    await fetch(fetchCall, options)
      .then(response => response.json())
      .then(data => {
        try {
          if (data.message) {
            alert(data.message)
          } else {
            let testData = data;
            // data from api call
            let averageStockPrice = testData.mashup?.["dividend"]?.dividendDetails.dividendDetail[0].equityDetail.payoutRatioTTM
            setAvgStockPrice(averageStockPrice)
            setBase(userInputShares * averageStockPrice)
            console.log('finished!')
          }
        }
        catch (err) {
          console.log(err)
        }
      });
  }

  const runFetchResponse = async () => {
    return await getFetchResponse(fetchCall, 5)
      .then(() => {
        console.log("avgStonk", avgStockPrice)
        console.log('base', base)
      })
  }



  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Stock Price Avg: <span className='output'>{avgStockPrice === 0 ? 'Loading...' : `$${avgStockPrice.toFixed(2)}`}</span></p>   {/* will bxe userInput? */}
      <p className="grow">Base: <span className='output'>{base === 0 ? 'Loading...' : `$${base.toFixed(2)}`}</span></p> {/* will be shares? */}
      <button className="grow">Edit</button>

    </div>
  )
}

export default CalcEntry
