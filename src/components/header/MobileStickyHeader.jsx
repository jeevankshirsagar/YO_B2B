import { Link } from "react-router-dom";

import "./mobile-sticky-header.css"

const MobileStickyHeader = ({ handleSearchModal }) => {
    return (
        <>
            <div className="mobile-sticky-header position-fixed w-100 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-6 msh-search">
                            {/* <button onClick={mobileSearchModal}> */}
                                <button onClick={() => handleSearchModal()}>
                                <i className="bi bi-search"></i>
                                <span className="ms-meta">
                                    Search
                                </span>
                            </button>                            
                        </div>

                        <div className="col-6 msh-account">
                            <Link
                                to="/"
                            >
                                <span>
                                    <i className="bi bi-person"></i>
                                    <span className="ms-meta">
                                        My Account
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileStickyHeader;