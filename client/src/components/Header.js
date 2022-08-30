import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../utils/auth'
const Header = () => {

  useEffect(() => {
    console.log(AuthService.loggedIn())
  }, [])

  return (
    <header className="bg-slate-300 h-16 w-full fixed">
            <Link to="/">
              <h1 className="text-5xl font-extrabold m-2 inline">Passivity</h1>
            </Link>
        <nav className="inline-flex fixed right-0">

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