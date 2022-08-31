
const CalcEntry = ({ symbol, holding }) => {

  // creates the fetch call from user input 
  let userInput = 'AAPL' // will be user input 
  let fetchCall = `https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=`
  let symbolQuery = fetchCall+userInput
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '10c804eb9dmsh767850cc77dae2fp1d40cfjsn0a11563a3a53',
        'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
    }
  };
  let fetchResponse = fetch(symbolQuery, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  // info from api call 
  // let shares = 5 //input from user 
  // let averageStockPrice = fetchResponse.valuation.valuationDetails.valuationDetail[0].equityDetail.priceToBookTTM
  // let mktPrice = 'info from call'
  // let base = shares*averageStockPrice
  // let mktValue = shares*mktPrice
  // console.log(shares)

  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Symbol: {symbol}</p>   {/* will be userInput? */}
      <p className="grow">Holdings: {holding}</p> {/* will be shares? */}
      <button className="grow">Edit</button>

    </div>
  )
}

export default CalcEntry