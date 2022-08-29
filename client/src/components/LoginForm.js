const LoginForm = () => {
  return (
    <div>
        <h2 className="text-center text-lg text-semibold">Login</h2>
        <form>
            <input type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-4/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Username..."></input>
            <input type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-4/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password..."></input>
            <button className="w-4/6 my-4 block mx-auto rounded-full bg-purple-500">Login</button>
        </form>
    </div>
  )
}

export default LoginForm