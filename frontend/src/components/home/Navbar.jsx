import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../context/AuthContext';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-secondary text-text px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo & Site Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" style={{ width: 'auto', height: 'auto', maxHeight: '40px' }} />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base items-center">
          <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#features" className="hover:text-accent transition">Features</a></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login" className="px-4 py-2 rounded bg-primary text-white hover:bg-accent transition">Login</Link></li>
              <li><Link to="/signup" className="px-4 py-2 rounded bg-primary text-white hover:bg-accent transition">Sign Up</Link></li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2">
                {user?.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full border-2 border-accent" />
                ) : (
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-base">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </span>
                )}
                <span className="font-semibold text-accent">{user?.name}</span>
              </li>
              <li>
                <button onClick={logout} className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition">Logout</button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

        {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4 text-base">
          <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#features" className="hover:text-accent transition">Features</a></li>
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login" className="block px-4 py-2 rounded bg-primary text-white hover:bg-accent transition text-center w-full">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="block px-4 py-2 rounded bg-accent text-white hover:bg-primary transition text-center w-full">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2">
                {user?.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="w-8 h-8 rounded-full border-2 border-accent" />
                ) : (
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-base">
                    {user?.name ? user.name[0].toUpperCase() : 'U'}
                  </span>
                )}
                <span className="font-semibold text-accent">{user?.name}</span>
              </li>
              <li>
                <button onClick={logout} className="block px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition text-center w-full">Logout</button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
