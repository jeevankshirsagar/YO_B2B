import { NavLink } from "react-router-dom"

const DashboardSidebar = ({ sidebarVisibility }) => {
    return (
        <>
            <div className={`dashboard-sidebar ${sidebarVisibility ? 'dashboard-sidebar-toggle' : ''}`}>
                <ul className="dashboard-sidebar-menu p-0 m-0">
                    <li>
                        <NavLink
                            to="/dashboard/"
                            end
                            className={({ isActive }) => isActive ? 'dashboard-item active-dashboard-item' : 'dashboard-item'}
                        >
                            <i className="bi bi-sliders"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/enquiry/"
                            className={({ isActive }) => isActive ? 'dashboard-item active-dashboard-item' : 'dashboard-item'}
                        >
                            <i className="bi bi-journals"></i>
                            <span>Enquiry</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/payment"
                            className={({ isActive }) => isActive ? 'dashboard-item active-dashboard-item' : 'dashboard-item'}
                        >
                            <i className="bi bi-cash"></i>
                            <span>Payment</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) => isActive ? 'dashboard-item active-dashboard-item' : 'dashboard-item'}
                        >
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DashboardSidebar;