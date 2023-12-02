import React from "react";

import { useModal } from "../../contexts/ModalContext";

const TopListing = ({ productThumbnail, productTitle, productCurrency, productPrice }) => {

  const { showModal } = useModal();

  return (
    <>
        <div className="item">
            <div className="pl-product-thumb">
                <img src={productThumbnail} />
            </div>
            <div className="pl-cnt-wrapper">
                <h4 className="pl-title">{productTitle}</h4>
                <div className="pl-variation">
                    <div className="pl-var-btn"></div>
                    <div className="pl-var-btn"></div>
                    <div className="pl-var-btn"></div>
                    <div className="pl-var-btn"></div>
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
    </>
  );
};

export default TopListing;
