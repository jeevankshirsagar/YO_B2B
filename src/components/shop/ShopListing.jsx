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
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum"
                    productCurrency="$"
                    productPrice="42.00"
                />
                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 2"
                    productCurrency="$"
                    productPrice="52.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 3"
                    productCurrency="$"
                    productPrice="65.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 4"
                    productCurrency="$"
                    productPrice="80.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 5"
                    productCurrency="$"
                    productPrice="99.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 6"
                    productCurrency="$"
                    productPrice="74.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 7"
                    productCurrency="$"
                    productPrice="20.00"
                />

                <ShopListingOne
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 8"
                    productCurrency="$"
                    productPrice="200.00"
                />

            </div>

        </div>

      </div>
    </div>
  );
};

export default ShopListing;
