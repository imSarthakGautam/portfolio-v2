import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="container navbar">
        <Link to="/" className="navbar-brand">
        .
        </Link>

        <div className="navbar-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Writing</NavLink>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;