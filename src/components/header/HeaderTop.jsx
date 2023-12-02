import "./header-top.css"

const HeaderTop = () => {
    return (
        <>
            <div className="header-top py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 d-flex justify-content-md-start justify-content-sm-between">
                            <div className="d-flex col-lg-auto col-md-auto px-0 justify-content-sm-center top-connect">
                                <p>Contact us:</p>
                                <a href="tel:+911234567890">+91 1234567890</a>
                            </div>
                            <div className="d-flex col-lg-auto col-md-auto px-0 ml-md-2 ml-md-0 justify-content-sm-center top-connect">
                                <p>Send us an email:</p>
                                <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex justify-content-md-end justify-content-sm-center header-tracking">
                            <div className="d-flex text-sm-center">
                                <a href="#">
                                    <span className="mr-2"><i className="bi bi-truck"></i></span>
                                    Request Tracking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderTop;