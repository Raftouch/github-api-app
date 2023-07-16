import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="z-10 fixed w-full h-[80px] bg-black text-white flex justify-between px-5 shadow-md items-center">
      <span>GB Search</span>
      <span className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  )
}
