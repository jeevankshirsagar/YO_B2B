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
                    productThumbnail="charger.jpg"
                    productTitle="iPhone Charger"
                    productCurrency="INR "
                    productPrice="1299"
                />
                <ShopListingOne
                    productThumbnail="smart_camera.webp"
                    productTitle="Bullet Camera"
                    productCurrency="INR "
                    productPrice="8999"
                />

                <ShopListingOne
                    productThumbnail="video_game.jpg"
                    productTitle="Game Pad"
                    productCurrency="INR "
                    productPrice="2499"
                />

                <ShopListingOne
                    productThumbnail="telescop.jpg"
                    productTitle="Telescop"
                    productCurrency="INR "
                    productPrice="13999"
                />

                <ShopListingOne
                    productThumbnail="selfi_stick.jpg"
                    productTitle="Selfie Stick"
                    productCurrency="INR "
                    productPrice="499"
                />

                <ShopListingOne
                    productThumbnail="charging_station.jpg"
                    productTitle=" Charging Station"
                    productCurrency="INR "
                    productPrice="549"
                />

                <ShopListingOne
                    productThumbnail="smartwatch2.png"
                    productTitle="Smart Watch"
                    productCurrency="INR "
                    productPrice="2499"
                />

                <ShopListingOne
                    productThumbnail="blutooth.jpg"
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
