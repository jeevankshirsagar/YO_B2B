import { useState } from "react";

import { Outlet } from "react-router-dom";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

const DashboardLayout = () => {

    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const handleSidebarVisibility = () => {
        setSidebarVisibility(prevState => !prevState)
    }

    return (
        <>
            <DashboardNavbar handleSidebarVisibility={handleSidebarVisibility} />
            <div className="dashboard-main">
                <div className="container-fluid p-0">
                    <div className="row mx-0">
                        <DashboardSidebar sidebarVisibility={sidebarVisibility} />
                        <div className="dashboard-panel-main">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;