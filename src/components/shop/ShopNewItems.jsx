import React from "react";

import "./shop-listing.css"

import ShopListingThree from "./ShopListingThree";

const ShopNewItems = () => {

  return (
    <div className="top-products-listing global-listing my-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">New Items</h3>
            
        <div className="top-product-listing-wrap">
            <div className="row text-center">

                <ShopListingThree
                    productThumbnail="Binocular.jpg"
                    productTitle="Binocular "
                    productCurrency="INR "
                    productPrice="1999"
                />
                <ShopListingThree
                    productThumbnail="headset.jpg"
                    productTitle="Headset"
                    productCurrency="INR "
                    productPrice="799"
                />

                <ShopListingThree
                    productThumbnail="wifi_camera.jpg"
                    productTitle="WIFI Camera"
                    productCurrency="INR "
                    productPrice="1299"
                />

                <ShopListingThree
                    productThumbnail="TABLET.jpg"
                    productTitle="Writing Tablet "
                    productCurrency="INR"
                    productPrice="299"
                />

                <ShopListingThree
                    productThumbnail="projector.jpg"
                    productTitle="Smart Projector"
                    productCurrency="INR "
                    productPrice="5999"
                />

                <ShopListingThree
                    productThumbnail="printer.webp"
                    productTitle="Printer"
                    productCurrency="INR "
                    productPrice="3999"
                />

                <ShopListingThree
                    productThumbnail="smartwatchwomen.jpg"
                    productTitle="Smart Watch"
                    productCurrency="INR "
                    productPrice="1399"
                />

                <ShopListingThree
                    productThumbnail="camcoreder.jpg"
                    productTitle=" Camcorder"
                    productCurrency="INR "
                    productPrice="2199"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopNewItems;
