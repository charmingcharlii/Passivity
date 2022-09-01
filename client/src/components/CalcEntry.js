import { useEffect, useState } from 'react';

const CalcEntry = ({ symbol, holding }) => {
  const [avgStockPrice, setAvgStockPrice] = useState(0)
  const [estimatedReturn, setEstimatedReturn] = useState(0)
  const [holdings, setHoldings] = useState(0)
  const [stock, setStock] = useState('')
  const [test, setTest] = useState(false)
  // const [dividends, setDividends] = useState(0)

  // creates the fetch call from user input 
  // let userInput = {stock} // will be user input 
  let fetchCall = `https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=${stock}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_FID_API,
      'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
    }
  };

  //If you want to run this ONCE when the component loads || if you want this to run only when something in your state changes, useEffect!
  useEffect(() => {
    runFetchResponse();
  },[test])
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
            // setestimatedReturn(userInputShares * averageStockPrice)
            console.log('finished!')
          }
        }
        catch (err) {
          console.log(err)
        }
      });
  }

  const runFetchResponse = async () => {
    return await getFetchResponse(fetchCall, holdings)
      .then(() => {
        console.log("avgStonk", avgStockPrice)
        console.log('estimatedReturn', estimatedReturn)
        console.log("hold", holdings)
      })
  }
  
  const calculate = () => {
    setTest(!test)
    setTimeout(()=> {
      setEstimatedReturn(holdings * avgStockPrice)
    },10)
   return (
    console.log({estimatedReturn})
   )
  }

  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Stock: <input onChange={(e) => { setStock(e.target.value) }} value={stock} type="text"></input></p>
      <p className="grow">Holdings: <input onChange={(e) => { setHoldings(e.target.value) }} value={holdings} type="integer"></input></p>
      <p className="grow">Avg Stock Price: <span className='output'>{avgStockPrice === 0 ? 'Loading...' : `$${avgStockPrice.toFixed(2)}`}</span></p> 
      <p className="grow">Estimated Return: <span className='output'>{estimatedReturn === 0 ? 'Loading...' : `$${estimatedReturn.toFixed(2)}`}</span></p> 
      <button className="grow" onClick={calculate}>Calculate</button>

    </div>
  )
}

export default CalcEntry
