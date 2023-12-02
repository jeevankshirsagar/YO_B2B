import React, { useEffect } from "react";

import "./shop-brands.css"

const ShopBrands = () => {
    
    useEffect(() => {
        // Initialize Owl Carousel here
        $("#shop-brands").owlCarousel({
            // Owl Carousel options go here
            items: 5,
            loop: true,
            nav: true,
            margin: 30,
            // autoplay: true,
            // autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsiveClass:true,
            responsive:{
                0: {
                    items: 2,
                },
                576:{
                    items:3,
                },
                768:{
                    items:4,
                },
                1024: {
                    items: 6,
                }
            },
            navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>']
        });
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="top-products-listing shop-listing-brands my-5">
      <div className="container">
        <h3 className="section-title text-center mb-5">Sponsored Brands</h3>
            
        <div className="top-product-listing-wrap">
            <div id="shop-brands" className="owl-carousel owl-theme text-center">

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

                <div className="item">
                    <img src="https://placehold.co/500x500.svg" />
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default ShopBrands;
