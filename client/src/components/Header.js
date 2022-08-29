import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-slate-50 h-16 w-full fixed">
            <h1 className="text-5xl font-extrabold m-2 inline">Passivity</h1>
        <nav className="inline-flex fixed right-0">
                <Link to="/about" className='w-fit m-4'>About</Link>
                <Link to="/portfolio" className='w-fit m-4'>My Portfolio</Link>
        </nav>
    </header>
  )
}

export default Header