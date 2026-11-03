import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="site-header">
      <nav className="container navbar">
        <Link
          to="/"
          className={`navbar-brand ${isHomePage ? "navbar-brand-hidden" : ""}`}
          aria-hidden={isHomePage}
          tabIndex={isHomePage ? -1 : 0}
        >
          SarthakGautam
        </Link>

        <div className="navbar-links">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Resources</NavLink>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;