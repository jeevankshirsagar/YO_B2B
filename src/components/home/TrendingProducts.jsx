import React, { useEffect } from "react";

import "./top-products.css";

import TrendingProductsListing from "./TrendingProductsListing";

const TrendingProducts = () => {
    
    useEffect(() => {
        // Initialize Owl Carousel here
        $("#trending-products").owlCarousel({
            // Owl Carousel options go here
            items: 6,
            loop: true,
            nav: true,
            margin: 30,
            // autoplay: true,
            // autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsiveClass:true,
            responsive:{
                0: {
                    items: 1,
                },
                576:{
                    items:2,
                    margin: 20,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                },
                1280: {
                    items: 5,
                }
            },
            navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>']
        });
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="top-products-listing my-5">
      <div className="container-fluid">
        <h3 className="section-title text-center mb-5">Trending Products</h3>
            
        <div className="top-product-listing-wrap">
            <div id="trending-products" className="owl-carousel owl-theme text-center">

                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 7"
                    productCurrency="$"
                    productPrice="42.00"
                />
                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 8"
                    productCurrency="$"
                    productPrice="52.00"
                />

                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 9"
                    productCurrency="$"
                    productPrice="65.00"
                />

                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 10"
                    productCurrency="$"
                    productPrice="80.00"
                />

                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 11"
                    productCurrency="$"
                    productPrice="99.00"
                />

                <TrendingProductsListing
                    productThumbnail="https://placehold.co/500x500.svg"
                    productTitle="Lorem Ipsum 12"
                    productCurrency="$"
                    productPrice="74.00"
                />

            </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingProducts;