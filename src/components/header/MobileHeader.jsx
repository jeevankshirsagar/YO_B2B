
import "./mobile-header.css"

import { Link, NavLink } from "react-router-dom"

const MobileHeader = () => {
    return (
        <> 
            <div className="mobile-header">
                <div className="pl-4 mobile-logo">
                    <div className="header-main header-mobile m-0">
                        <Link className="navbar-brand m-0 p-0" href="/">
                            <img src="https://placehold.co/150x80.svg" width="150" height="80" alt="site-logo" />
                        </Link>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark d-block col-auto mobile-navbar p-0">
                    <button className="navbar-toggler d-block ml-auto mr-4" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/shop"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/smartphones"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Smartphones
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/desktops"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Desktops
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/laptops"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Laptops
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/more"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        More
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Accessories
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink
                                        to="/chargers"
                                        className={({ isActive }) => isActive ? 'active-nav-link dropdown-item' : 'dropdown-item'}
                                        >
                                            Chargers
                                    </NavLink>
                                    <NavLink
                                        to="/cables"
                                        className={({ isActive }) => isActive ? 'active-nav-link dropdown-item' : 'dropdown-item'}
                                        >
                                            Cables
                                    </NavLink>
                                    <NavLink
                                        to="/adapters"
                                        className={({ isActive }) => isActive ? 'active-nav-link dropdown-item' : 'dropdown-item'}
                                        >
                                            Adapters
                                    </NavLink>
                                    <NavLink
                                        to="/powerbanks"
                                        className={({ isActive }) => isActive ? 'active-nav-link dropdown-item' : 'dropdown-item'}
                                        >
                                            Powerbanks
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? 'active-nav-link nav-link' : 'nav-link'}
                                    >
                                        Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MobileHeader;