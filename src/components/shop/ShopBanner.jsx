import { Link } from "react-router-dom";
import ShopCategoryMain from "./ShopCategoryMain";

const ShopBanner = () => {

    const shopBannerUrl = "https://placehold.co/1920x600.svg";

    return (
        <>
            <div className="common-banner shop-listing-banner position-relative" style={{ backgroundImage: `url(${shopBannerUrl})` }}>

                <div className="container-fluid">
                    <div className="plb-wrapper position-relative">
                        <div className="plb-content text-center">
                            <h1 className="plb-title text-white">Shop Page</h1>
                            <div className="plb-cta">
                                <Link
                                    to="/"
                                    className="theme-btn-v2 theme-btn-auto text-white"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopCategoryMain />
            </div>
        </>
    )
}

export default ShopBanner;