import React from "react";

import "./shop-listing.css"
import ShopListingOne from "./ShopListingOne";

const ShopListing = () => {

  return (
    <div className="top-products-listing global-listing my-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">Perfect For You</h3>
            
        <div className="top-product-listing-wrap">
            <div className="row text-center">

                <ShopListingOne
                    productThumbnail="All_Images/charger.jpg"
                    productTitle="iPhone Charger"
                    productCurrency="INR "
                    productPrice="1299"
                />
                <ShopListingOne
                    productThumbnail="All_Images/smart_camera.webp"
                    productTitle="Bullet Camera"
                    productCurrency="INR "
                    productPrice="8999"
                />

                <ShopListingOne
                    productThumbnail="All_Images/video_game.jpg"
                    productTitle="Game Pad"
                    productCurrency="INR "
                    productPrice="2499"
                />

                <ShopListingOne
                    productThumbnail="All_Images/telescop.jpg"
                    productTitle="Telescop"
                    productCurrency="INR "
                    productPrice="13999"
                />

                <ShopListingOne
                    productThumbnail="All_Images/selfi_stick.jpg"
                    productTitle="Selfie Stick"
                    productCurrency="INR "
                    productPrice="499"
                />

                <ShopListingOne
                    productThumbnail="All_Images/charging_station.jpg"
                    productTitle=" Charging Station"
                    productCurrency="INR "
                    productPrice="549"
                />

                <ShopListingOne
                    productThumbnail="All_Images/smartwatchwomen.jpg"
                    productTitle="Smart Watch"
                    productCurrency="INR "
                    productPrice="2499"
                />

                <ShopListingOne
                    productThumbnail="All_Images/blutooth.jpg"
                    productTitle="Wireless Earphones"
                    productCurrency="INR "
                    productPrice="2299"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopListing;
