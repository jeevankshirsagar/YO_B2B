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
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 9"
                    productCurrency="$"
                    productPrice="42.00"
                />
                <ShopListingTwo
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 10"
                    productCurrency="$"
                    productPrice="52.00"
                />

                <ShopListingTwo
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 11"
                    productCurrency="$"
                    productPrice="65.00"
                />

                <ShopListingTwo
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 12"
                    productCurrency="$"
                    productPrice="80.00"
                />

                <ShopListingTwo
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 13"
                    productCurrency="$"
                    productPrice="99.00"
                />

                <ShopListingTwo
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 14"
                    productCurrency="$"
                    productPrice="74.00"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopBestSelling;
