import { useState } from "react";

import { Outlet } from "react-router-dom";

import MediaQuery from "react-responsive";

import EnquiryForm from "../components/forms/EnquiryForm"
import HeaderTop from "../components/header/HeaderTop";
import Header from "../components/header/Header";
import HeaderDesktop from "../components/header/DesktopNavbar";
import MobileHeader from "../components/header/MobileHeader";
import MobileStickyHeader from "../components/header/MobileStickyHeader";
import MobileSearchModal from "../components/header/MobileSearchModal";
import Footer from "../components/footer/Footer";

const MainLayout = () => {

    const [mobileSearchModal, setMobileSearchModal] = useState(false)

    const handleSearchModal = () => {
        setMobileSearchModal(!mobileSearchModal);
    };

    return (
        <>
            <EnquiryForm />

            <HeaderTop />

            <MediaQuery query="(min-width: 1024px)">
            <Header />
            </MediaQuery>  

            <MediaQuery query="(min-width: 1024px)">
            <HeaderDesktop />
            </MediaQuery>

            <MediaQuery query="(max-width: 768px)">
            <MobileHeader />
            </MediaQuery>

            <MediaQuery query="(max-width: 768px)">
            <MobileStickyHeader
                mobileSearchModal={mobileSearchModal}
                handleSearchModal={handleSearchModal}
            />
            <MobileSearchModal
                mobileSearchModal={mobileSearchModal}
                handleSearchModal={handleSearchModal}
            />
            </MediaQuery>
            
            <Outlet />

            <Footer />
        </>
    )
}

export default MainLayout;