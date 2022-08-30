import { useState } from "react"

const LoginForm = () => {

    const [ signUp, setSignUp ] = useState(false)

    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ password, setPassword ] = useState('')

    const loginHandler = (e) => {
        e.preventDefault()
        // grab state info in one obj
        let loginInfo = {
            name,
            password
        }
        console.log(loginInfo)
        // mutation for login TODO

        setName('')
        setPassword('')
    }

    const createAccountHandler = (e) => {
        e.preventDefault()
        let newUser = {
            name,
            email,
            password
        }
        console.log(newUser)
        // mutation for newAccount TODO

        setEmail('')
        setName('')
        setPassword('')
    }

  return (
    <div>
        {/* set to fixed length on a breakpoint? around the h/w-80 mark on full screens */}
        <h2 className="text-center text-lg text-semibold pb-4">
            {/* replace this with a small logo? */}
            {signUp ? "Sign Up" : "Login"}
        </h2>

        <form>
            <input onChange={(e)=> {setName(e.target.value)}} value={name} type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-4/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Username..."></input>

            {signUp ? 
            <input onChange={(e)=> {setEmail(e.target.value)}} value={email} type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-4/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email..."></input> : null}

            <input onChange={(e)=> {setPassword(e.target.value)}} value={password} type="text" className="placeholder:italic placeholder:text-slate-400 block mx-auto my-2 bg-white w-4/6 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password..."></input>

            <p onClick={() => {setSignUp(!signUp)}} className="text-center underline hover:cursor-pointer">
                {signUp ? "I'm new Here!" : "I have an account" }
            </p>

            <button onClick={(e) => {signUp ? createAccountHandler(e) : loginHandler(e)}} className="w-4/6 my-6 block p-2 mx-auto rounded-full bg-purple-500">
                {!signUp ? "Login" : "Sign Up"}
            </button>
        </form>
    </div>
  )
}

export default LoginForm