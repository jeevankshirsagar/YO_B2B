import { Link } from "react-router-dom";

const ShopCatBlock = ({ title, url }) => {

    return (
        <>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="shop-cat-block">
                    <div className="sc-cta">
                        <Link
                            to={url}
                        >
                            {title}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCatBlock;