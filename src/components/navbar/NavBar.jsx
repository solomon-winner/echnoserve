import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <ul className="flex space-x-4">
        <li className="nav-item">
          <a href="#" className="nav-link flex items-center space-x-2">
            <span className="nav-icon">🏠</span>
            <span className="nav-label relative">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link flex items-center space-x-2">
            <span className="nav-icon">📄</span>
            <span className="nav-label relative">Documents</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link flex items-center space-x-2">
            <span className="nav-icon">📞</span>
            <span className="nav-label relative">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;