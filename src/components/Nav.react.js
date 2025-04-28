import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <HashLink className="navbar-brand" to="#page-top">
          Dark Northwest Podcast
        </HashLink>
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
              <HashLink className="nav-link" to="/#page-top">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/cast#page-top">
                Cast
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#signup">
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
