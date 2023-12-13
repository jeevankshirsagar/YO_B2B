import ShopBanner from "../components/shop/ShopBanner";
import ShopBestSelling from "../components/shop/ShopBestSelling";
import ShopJumbotron from "../components/shop/ShopJumbotron";
import ShopListing from "../components/shop/ShopListing";
import ShopNewItems from "../components/shop/ShopNewItems";
import ShopBrands from "../util/ShopBrands";
import ShopPopup from "../util/ShopPopup";

import "./shop-main.css"

const ShopMain = () => {
    return (
        <>
            <ShopPopup />
            <ShopBanner />
            
            <ShopListing />
            <ShopJumbotron />
            <ShopBestSelling />
            <ShopNewItems />
            <ShopBrands />
        </>
    )
}

export default ShopMain;