
const DashboardEnquiryStatus = () => {
    return (
        <>
            <div className="dashboard-status dashboard-card mb-5">
                <h5 className="card-title">Enquiry Status (Latest)</h5>
                <div className="dashboard-status-wrap">
                    <div className="dashboard-status-bar"></div>
                    <div className="dashboard-status-inner d-flex flex-wrap justify-content-between">
                        <div className="dash-status-item col-sm-3 col-12 p-0 dash-status-submitted dash-status-active">
                            <span className="dash-status-point"></span>
                            <span className="dash-status-title text-sm-left">Submitted</span>
                        </div>
                        <div className="dash-status-item col-sm-3 col-12 p-0 dash-status-ordered">
                            <span className="dash-status-point"></span>
                            <span className="dash-status-title text-sm-center">Ordered</span>
                        </div>
                        <div className="dash-status-item col-sm-3 col-12 p-0 dash-status-delivered">
                            <span className="dash-status-point"></span>
                            <span className="dash-status-title text-sm-center">Delivered</span>
                        </div>
                        <div className="dash-status-item col-sm-3 col-12 p-0 dash-status-completed">
                            <span className="dash-status-point"></span>
                            <span className="dash-status-title text-sm-right">Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardEnquiryStatus;