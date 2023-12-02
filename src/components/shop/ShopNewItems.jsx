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
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 17"
                    productCurrency="$"
                    productPrice="42.00"
                />
                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 18"
                    productCurrency="$"
                    productPrice="52.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 19"
                    productCurrency="$"
                    productPrice="65.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 20"
                    productCurrency="$"
                    productPrice="80.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 21"
                    productCurrency="$"
                    productPrice="99.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 22"
                    productCurrency="$"
                    productPrice="74.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 23"
                    productCurrency="$"
                    productPrice="20.00"
                />

                <ShopListingThree
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 24"
                    productCurrency="$"
                    productPrice="200.00"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopNewItems;
