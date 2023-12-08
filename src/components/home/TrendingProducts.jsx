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
                    productThumbnail="All_Images/blutoothspeaker.jpg"
                    productTitle="Smart Speaker"
                    productCurrency="INR "
                    productPrice="1299"
                />
                <TrendingProductsListing
                    productThumbnail="All_Images/tab.png"
                    productTitle="Samsung Tab"
                    productCurrency="INR "
                    productPrice="24999"
                />

                <TrendingProductsListing
                    productThumbnail="All_Images/power_bank.jpg"
                    productTitle="Smart Power Bank"
                    productCurrency="INR "
                    productPrice="1999"
                />

                <TrendingProductsListing
                    productThumbnail="All_Images/printer.webp"
                    productTitle="Smart Printer"
                    productCurrency="INR "
                    productPrice="19499"
                />

                <TrendingProductsListing
                    productThumbnail="All_Images/tv3.jpeg"
                    productTitle="Smart TV"
                    productCurrency="INR "
                    productPrice="42499"
                />

                <TrendingProductsListing
                    productThumbnail="All_Images/mouse.jpg"
                    productTitle="Smart Mouse"
                    productCurrency="INR "
                    productPrice="5999"
                />

            </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingProducts;
