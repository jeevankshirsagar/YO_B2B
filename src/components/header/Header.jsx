
import "./header.css"

const Header = () => {


    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="row header-wrapper justify-content-between align-items-center">
                        <div className="col-2 pl-0">
                            <a className="navbar-brand m-0 p-0" href="/">
                                <img src="All_Images/logo (1).png" width="150" height="80" alt="site-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;