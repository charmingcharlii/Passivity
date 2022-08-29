import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-slate-300 h-16 w-full fixed">
            <Link to="/">
              <h1 className="text-5xl font-extrabold m-2 inline">Passivity</h1>
            </Link>
        <nav className="inline-flex fixed right-0">
                <Link to="/about" className="w-fit m-4 hover:text-slate-500">About</Link>
                <Link to="/portfolio" className="w-fit m-4 hover:text-slate-500">My Portfolio</Link>
                {/* add tertiary here to check login state. if logged in, display logout btn w logout function*/}
                <Link to="/login" className="w-fit m-4 hover:text-slate-500">Login</Link>
        </nav>
    </header>
  )
}

export default Header