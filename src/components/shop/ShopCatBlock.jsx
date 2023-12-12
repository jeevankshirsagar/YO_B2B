import React from "react";
import { Link } from "react-router-dom";

const ShopCatBlock = ({ title, url, image }) => {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="shop-cat-block">
                <div className="sc-cta">
                    <Link to={url}>
                    <img src={image} alt={title} style={{ borderRadius: '5%' }} />
                        {title}
                    </Link>

                </div>
             </div>
        </div>
    );
};

export default ShopCatBlock;
