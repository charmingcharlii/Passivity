
const CalcEntry = ({ symbol, holding }) => {

  // creates the fetch call from user input 
  let symbol = 'AAPL' // will be user input 
  let fetchCall = `https://fidelity-investments.p.rapidapi.com/quotes/get-mashup?symbol=`
  let symbolQuery = fetchCall+symbol
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a7c44cc221mshcba2a134652cbf7p18ad27jsn84acac37d6f5',
        'X-RapidAPI-Host': 'fidelity-investments.p.rapidapi.com'
    }
  };
  let fetchResponse = fetch(symbolQuery, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Symbol: {symbol}</p>
      <p className="grow">Holdings: {holding}</p>
      <button className="grow">Edit</button>

    </div>
  )
}

export default CalcEntry