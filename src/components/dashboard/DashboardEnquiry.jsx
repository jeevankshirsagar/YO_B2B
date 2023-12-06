import demoPieChart from "./demo-pie-chart-diagram.png"

import DashboardEnquiryStatus from "./DashboardEnquiryStatus";

const DashboardEnquiry = () => {
    return (
        <>
            <DashboardEnquiryStatus />
            <div className="col-12 p-0">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="dashboard-card">
                            <h5 className="card-title">Enquiries</h5>

                            <div className="dashboard-enquiry-status">
                                <div className="dash-enquiry-head d-flex justify-content-between">
                                    <div className="col-sm-6 col-6 pl-0">
                                        <h6>No.</h6>
                                    </div>
                                    <div className="col-sm-6 col-6 p-0">
                                        <h6>Status</h6>
                                    </div>
                                </div>
                                <div className="dash-enquiry-list">
                                    <div className="dash-enquiry-meta">
                                        <div className="col-6">
                                            <p className="meta-num">#0021</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="meta-msg meta-success">Completed</p>
                                        </div>
                                    </div>
                                    <div className="dash-enquiry-meta">
                                        <div className="col-6">
                                            <p className="meta-num">#0022</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="meta-msg meta-ongoing">Ordered</p>
                                        </div>
                                    </div>
                                    <div className="dash-enquiry-meta">
                                        <div className="col-6">
                                            <p className="meta-num">#0023</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="meta-msg meta-failed">Rejected</p>
                                        </div>
                                    </div>
                                    <div className="dash-enquiry-meta">
                                        <div className="col-6">
                                            <p className="meta-num">#0024</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="meta-msg meta-success">Completed</p>
                                        </div>
                                    </div>
                                    <div className="dash-enquiry-meta">
                                        <div className="col-6">
                                            <p className="meta-num">#0025</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="meta-msg meta-success">Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-5">
                        <div className="dashboard-card">
                            <h5 className="card-title">Enquiries No.</h5>
                            <div className="row m-0">
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Dues</h6>
                                    <h5>120</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Paid</h6>
                                    <h5>5</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Total</h6>
                                    <h5>125</h5>
                                </div>
                            </div>
                            <div className="dash-card-canvas">
                                <img src={demoPieChart} style={{ height: '300px', display: 'block', margin: '0 auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardEnquiry;