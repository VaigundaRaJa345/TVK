
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/photos', text: 'Photos' },
    { to: '/videos', text: 'Videos' },
    { to: '/articles', text: 'Articles' },
    { to: '/contribute', text: 'Contribute' },
  ];

  const activeLinkStyle = {
    color: '#ffd600',
    borderBottom: '2px solid #e60000',
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-tvk-red/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-2xl font-black tracking-wider">
            <span className="text-tvk-red">THALAPATHY</span>
            <span className="text-tvk-yellow">VIJAY</span>
          </NavLink>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-white hover:text-tvk-yellow transition-colors duration-300 font-semibold pb-1"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-tvk-yellow transition-colors duration-300 font-semibold"
                  style={({ isActive }) => (isActive ? { color: '#ffd600' } : {})}
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
