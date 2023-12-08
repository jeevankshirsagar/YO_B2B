import DashboardPromoPopup from "./DashboardPromoPopup"
import DashboardPromoBanner from "./DashboardPromoBanner";

const DashboardPayment = () => {
    return (
        <>
            <DashboardPromoPopup />
            <div className="dashboard-payment text-center">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="dashboard-card">
                            <h4>Dues</h4>
                            <h5>500k</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-md-0 mt-5">
                        <div className="dashboard-card">
                            <h4>Paid</h4>
                            <h5>500k</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-md-0 mt-5">
                        <div className="dashboard-card">
                            <h4>Total</h4>
                            <h5>500k</h5>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardPromoBanner />
        </>
    )
}

export default DashboardPayment;