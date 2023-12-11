import React from "react";

import "./shop-listing.css"

import ShopListingThree from "./ShopListingThree";

const ShopNewItems = () => {

  return (
    <div className="top-products-listing global-listing my-5">
      <div className="demo">
        <h3 className="section-title text-center mb-5">New Items</h3>
            
        <div className="top-product-listing-wrap">
            <div className="row text-center">

                <ShopListingThree
                    productThumbnail="All_Images/Binocular.jpg"
                    productTitle="Binocular "
                    productCurrency="INR "
                    productPrice="1999"
                />
                <ShopListingThree
                    productThumbnail="All_Images/headset.jpg"
                    productTitle="Headset"
                    productCurrency="INR "
                    productPrice="799"
                />

                <ShopListingThree
                    productThumbnail="All_Images/wifi_camera-removebg-preview.png"
                    productTitle="WIFI Camera"
                    productCurrency="INR "
                    productPrice="1299"
                />

                <ShopListingThree
                    productThumbnail="All_Images/tab-removebg-preview.png"
                    productTitle="Writing Tablet "
                    productCurrency="INR"
                    productPrice="299"
                />

                <ShopListingThree
                    productThumbnail="All_Images/projector.jpg"
                    productTitle="Smart Projector"
                    productCurrency="INR "
                    productPrice="5999"
                />

                <ShopListingThree
                    productThumbnail="All_Images/Printers-removebg-preview.png"
                    productTitle="Printer"
                    productCurrency="INR "
                    productPrice="3999"
                />

                <ShopListingThree
                    productThumbnail="All_Images/smartwatchwomen.jpg"
                    productTitle="Smart Watch"
                    productCurrency="INR "
                    productPrice="1399"
                />

                <ShopListingThree
                    productThumbnail="All_Images/camcoreder.jpg"
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
