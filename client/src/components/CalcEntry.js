const CalcEntry = ({ symbol, holding }) => {
  return (
    <div className="border-black border-2 w-full h-auto flex justify-between">
      <p className="grow">Symbol: {symbol}</p>
      <p className="grow">Holdings: {holding}</p>
      <button className="grow">Edit</button>

    </div>
  )
}

export default CalcEntry