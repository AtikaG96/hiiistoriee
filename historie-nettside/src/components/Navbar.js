import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Hjem</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;