import React, { useEffect } from "react";

import "./top-products.css";
import TopListing from "./TopListing";

const TopProducts = () => {

    useEffect(() => {
        // Initialize Owl Carousel here
        $("#top-products").owlCarousel({
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
        <h3 className="section-title text-center mb-5">Top Products</h3>
            
        <div className="top-product-listing-wrap">
            <div id="top-products" className="owl-carousel owl-theme text-center">

                <TopListing
                    productThumbnail="iphon-15.jpg"
                    productTitle="iPhone 15"
                    productCurrency="INR "
                    productPrice="74900"
                />
                <TopListing
                    productThumbnail="sam s20.jpg"
                    productTitle="Samsung s20"
                    productCurrency="INR "
                    productPrice="84999"
                />

                <TopListing
                    productThumbnail="laptop.png"
                    productTitle="Laptop"
                    productCurrency="INR "
                    productPrice="80000"
                />

                <TopListing
                    productThumbnail="BUDS.jpg"
                    productTitle="Ear Buds"
                    productCurrency="INR "
                    productPrice="3999"
                />

                <TopListing
                    productThumbnail="headphone.avif"
                    productTitle="Headphones"
                    productCurrency="INR "
                    productPrice="2999"
                />

                <TopListing
                    productThumbnail="smartwatch2.png"
                    productTitle="Smart Watch"
                    productCurrency="INR "
                    productPrice="2499"
                />
                
            </div>
        </div>

      </div>
    </div>
  );
};

export default TopProducts;
