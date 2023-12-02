import { useState } from "react";

import SliderBanner from "../components/home/SliderBanner";
import TopProducts from "../components/home/TopProducts";
import TrendingProducts from "../components/home/TrendingProducts";
import UserTypes from "../components/home/UserTypes";
import HomePopup from "../util/HomePopup";
import RetailLoginForm from "../components/forms/RetailLoginForm";

const Home = () => {

    const [loginModalVisible, setLoginModalVisible] = useState(false);

    return (
        <>
            <RetailLoginForm
                loginModalVisible={loginModalVisible}
                setLoginModalVisible={setLoginModalVisible}
            />

            <SliderBanner />

            <UserTypes
                loginModalVisible={loginModalVisible}
                setLoginModalVisible={setLoginModalVisible}
            />

            <TopProducts />

            <TrendingProducts />

            <HomePopup />
        </>
    )
}

export default Home;