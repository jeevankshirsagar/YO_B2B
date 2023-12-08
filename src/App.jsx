import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopMain from "./pages/ShopMain";
import Dashboard from "./pages/Dashboard";
import DashboardEnquiry from "./components/dashboard/DashboardEnquiry";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardPayment from "./components/dashboard/DashboardPayment";
import DashboardProfile from "./components/dashboard/DashboardProfile";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopMain />} />
          <Route path="dashboard" element={<DashboardLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="enquiry" element={<DashboardEnquiry />} />
            <Route path="payment" element={<DashboardPayment />} />
            <Route path="profile" element={<DashboardProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
