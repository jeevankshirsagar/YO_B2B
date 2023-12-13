import React from "react";

import "./shop-listing.css"
import ShopListingTwo from "./ShopListingTwo";

const ShopBestSelling = () => {

  return (
    <div className="top-products-listing global-listing global-listing-v2 my-5">
      <div className="demo">
        <h3 className="section-title text-center mb-5">Best Selling Items</h3>
            
        <div className="top-product-listing-wrap">
            <div className="row">

                <ShopListingTwo
                    productThumbnail="All_Images/iphon-15.jpg"
                    productTitle="iPhone 15"
                    productCurrency="INR "
                    productPrice="74999"
                />
                <ShopListingTwo
                    productThumbnail="YO_B2B/realme-gt-removebg-preview.png"
                    productTitle="Realme GT"
                    productCurrency="INR "
                    productPrice="24999"
                />

                <ShopListingTwo
                    productThumbnail="All_Images/video_game.jpg"
                    productTitle="Gaming Pad"
                    productCurrency="INR "
                    productPrice="1999"
                />

                <ShopListingTwo
                    productThumbnail="All_Images/tv3.jpeg"
                    productTitle="Smart TV"
                    productCurrency="INR "
                    productPrice="34999"
                />

                <ShopListingTwo
                    productThumbnail="All_Images/mouse.jpg"
                    productTitle="Mouse"
                    productCurrency="INR "
                    productPrice="1299"
                />

                <ShopListingTwo
                    productThumbnail="All_Images/projector.jpg"
                    productTitle="Projector"
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
