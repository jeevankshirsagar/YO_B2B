import React from "react";

import "./shop-listing.css"

import { useModal } from "../../contexts/ModalContext";

const ShopListingTwo = ({ productThumbnail, productTitle, productCurrency, productPrice }) => {

  const { showModal } = useModal();

  return (
    <>
        <div className="item col-lg-4 col-sm-6">
            <div className="gl-col-item d-flex flex-wrap">
                <div className="pl-product-thumb col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                    <img src={productThumbnail} />
                </div>
                <div className="pl-cnt-wrapper col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                    <h4 className="pl-title">{productTitle}</h4>
                    <div className="pl-variation">
                        {/* <div className="pl-var-btn"></div>
                        <div className="pl-var-btn"></div>
                        <div className="pl-var-btn"></div>
                        <div className="pl-var-btn"></div> */}
                    </div>
                    <div className="pl-meta">
                        <span className="pl-currency">{productCurrency}</span>
                        <span className="pl-price">{productPrice}</span>
                        <span className="pl-qty">/ <span className="pl-pp">Lot</span></span>
                    </div>
                    <div className="pl-cta-btn">
                        <button onClick={showModal}>Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ShopListingTwo;
