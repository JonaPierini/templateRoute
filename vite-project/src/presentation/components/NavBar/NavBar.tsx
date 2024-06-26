import { Link } from "react-router-dom";
import "./NavBar.css";
import { RootRoutes } from "../../routes/def";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="nav-link" to={RootRoutes.Reports}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={RootRoutes.Reports}>
                Reports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={RootRoutes.Users}>
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
