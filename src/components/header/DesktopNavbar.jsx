import "./desktop-navbar.css";

import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark desktop-navbar px-2 py-0">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="header-main">
          <div className="container">
            <div className="row header-wrapper justify-content-between align-items-center">
              <div className="col-2 pl-0">
                <a className="navbar-brand m-0 p-0" href="/">
                  <img className="logo"
                    src="All_Images/logo (1).png"
                    width="150"
                    height="80"
                    alt="site-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/smartphones"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Smartphones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/desktops"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Desktops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/laptops"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Laptops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/more"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                More
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accessories
              </NavLink>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  to="/charger"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link dropdown-item" : "dropdown-item"
                  }
                >
                  Charger
                </NavLink>
                <NavLink
                  to="/cables"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link dropdown-item" : "dropdown-item"
                  }
                >
                  Cables
                </NavLink>
                <NavLink
                  to="/adapters"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link dropdown-item" : "dropdown-item"
                  }
                >
                  Adapters
                </NavLink>
                <NavLink
                  to="/powerbanks"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link dropdown-item" : "dropdown-item"
                  }
                >
                  Powerbanks
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-nav-link nav-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="header-main">
            <div className="col-auto pr-0 d-flex justify-content-end">
              {/* NON LOGIN */}

              <div className="account-meta">
                <a href="" className="d-flex">
                  <i className="bi bi-person"></i>
                  <span>Log In</span>
                </a>
              </div>

              {/* LOGGED IN */}

              {/*
            <div className="account-meta">
             <a href="#" className="d-flex">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
            </a>
           </div>
              */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderDesktop;
