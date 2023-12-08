
const DashboardProfile = () => {
    return (
        <>
            <div className="dashboard-profile">
                <div className="dashboard-card">
                    <div className="row align-items-center m-0">
                        <div className="col-md-6 col-12 p-0 dashboard-profile-bio">
                            <h4 className="m-0">Hello, Username</h4>
                        </div>
                        <div className="col-md-6 col-12 p-0 dashboard-profile-img mt-md-0 mt-3">
                            <img src="https://placehold.co/150x150.svg" className="rounded-circle d-block ml-md-auto mr-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-profile-md mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="dashboard-card">
                            <h5 className="card-title">Personal Details</h5>
                            <div className="dash-profile-meta">
                                <h6>Full Name:</h6>
                                <p>John Doe</p>
                                <h6>Email:</h6>
                                <p>johndoe@yahoo.com</p>
                                <h6>Phone:</h6>
                                <p>1234567890</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-md-0 mt-5">
                        <div className="dashboard-card">
                            <h5 className="card-title">Business Details</h5>
                            <div className="dash-profile-meta">
                                <h6>Full Name:</h6>
                                <p>John Doe</p>
                                <h6>Email:</h6>
                                <p>johndoe@yahoo.com</p>
                                <h6>Phone:</h6>
                                <p>1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardProfile;