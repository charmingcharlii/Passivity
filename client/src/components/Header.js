import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../utils/auth'
const Header = () => {
  // if innerWidth greater than 390 => render regular vanbar else render 3 dash to proc navebar
  return (
    <header className="bg-slate-300 h-auto w-full text-center md:text-left fixed">
      <Link to="/">
        <h1 className="text-5xl font-extrabold m-2 inline">Passivity</h1>
      </Link>
      <nav className="inline-flex flex-wrap fixed right-0 relative">

        <Link to="/" className="w-fit m-4 hover:text-slate-500">Home</Link>
        <Link to="/about" className="w-fit m-4 hover:text-slate-500">About</Link>
        <Link to="/portfolio" className="w-fit m-4 hover:text-slate-500">My Portfolio</Link>
        {AuthService.loggedIn() ? <p onClick={() => AuthService.logout()} className="w-fit m-4 hover:text-slate-500 hover:cursor-pointer">Logout</p>
        : <Link to="/login" className="w-fit m-4 hover:text-slate-500">Login</Link>}

      </nav>
    </header>
  )
}

export default Header