import { HashLink } from "react-router-hash-link";
import { useCallback } from "react";

function NavLink({ to, children, className }) {
  const handleClick = useCallback(() => {
    // After navigation and scroll, clean up the URL by removing #page-top
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash.includes("#page-top")) {
        const cleanHash = hash.replace("#page-top", "").replace(/%23page-top/i, "");
        window.history.replaceState(null, "", cleanHash || "#/");
      }
    }, 100);
  }, []);

  return (
    <HashLink className={className} to={to} onClick={handleClick}>
      {children}
    </HashLink>
  );
}

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <NavLink className="navbar-brand" to="/#page-top">
          Dark Northwest
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/#page-top">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about#page-top">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/episodes#page-top">
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cast#page-top">
                Cast & Crew
              </NavLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#contact">
                Contact
              </HashLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
