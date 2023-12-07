import demoLineGraph from "./demo-line-graph.png"
import demoBarGraph from "./demo-bar-graph.webp"

import DashboardStatus from "./DashboardStatus";

const DashboardArea = () => {
    return (
        <>
            <h4 className="mb-lg-5 mb-md-4 mb-5">Welcome, Username</h4>
            <div className="col-12 p-0">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="dashboard-card">
                            <h5 className="card-title">Enquiry Details</h5>
                            <div className="row m-0">
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Closed</h6>
                                    <h5>100</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Pending</h6>
                                    <h5>15</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Total</h6>
                                    <h5>115</h5>
                                </div>
                            </div>
                            <div className="dash-card-canvas">
                                <img src={demoLineGraph} style={{ height: '350px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-md-0 mt-5">
                        <div className="dashboard-card">
                            <h5 className="card-title">Payment Details</h5>
                            <div className="row m-0">
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Closed</h6>
                                    <h5>120</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Pending</h6>
                                    <h5>5</h5>
                                </div>
                                <div className="col-md-4 col-sm-4 p-0 dashboard-card-count">
                                    <h6>Total</h6>
                                    <h5>125</h5>
                                </div>
                            </div>
                            <div className="dash-card-canvas">
                                <img src={demoBarGraph} style={{ height: '350px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardStatus />
        </>
    )
}

export default DashboardArea;