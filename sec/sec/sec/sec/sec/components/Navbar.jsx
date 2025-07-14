import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">shipmentsusa</Link>
        <div className="space-x-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold text-blue-600' : ''}>Home</NavLink>
          <NavLink to="/tracking" className={({isActive}) => isActive ? 'font-semibold text-blue-600' : ''}>Tracking</NavLink>
          <NavLink to="/shipping" className={({isActive}) => isActive ? 'font-semibold text-blue-600' : ''}>Shipping</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'font-semibold text-blue-600' : ''}>Contact</NavLink>
          <NavLink to="/login" className={({isActive}) => isActive ? 'font-semibold text-blue-600' : ''}>Login</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
