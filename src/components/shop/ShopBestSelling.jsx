import React from "react";

import "./shop-listing.css"
import ShopListingTwo from "./ShopListingTwo";

const ShopBestSelling = () => {

  return (
    <div className="top-products-listing global-listing global-listing-v2 my-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">Best Selling Items</h3>
            
        <div className="top-product-listing-wrap">
            <div className="row">

                <ShopListingTwo
                    productThumbnail="iphon-15.jpg"
                    productTitle="iPhone 15"
                    productCurrency="INR "
                    productPrice="74999"
                />
                <ShopListingTwo
                    productThumbnail="realme2.webp"
                    productTitle="Realme GT"
                    productCurrency="INR "
                    productPrice="24999"
                />

                <ShopListingTwo
                    productThumbnail="video_game.jpg"
                    productTitle="Gaming Pad"
                    productCurrency="INR "
                    productPrice="1999"
                />

                <ShopListingTwo
                    productThumbnail="tv3.jpeg"
                    productTitle="Smart TV"
                    productCurrency="INR "
                    productPrice="34999"
                />

                <ShopListingTwo
                    productThumbnail="mouse.jpg"
                    productTitle="Mouse"
                    productCurrency="INR "
                    productPrice="1299"
                />

                <ShopListingTwo
                    productThumbnail="projector.jpg"
                    productTitle="Bluetooth Projector"
                    productCurrency="INR "
                    productPrice="9499"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopBestSelling;
