import ShopCatBlock from "./ShopCatBlock";

const ShopCategoryMain = () => {
    return (
        <>
            <div className="shop-cat-blocks">
                <div className="container">
                    <h5 className="sc-subtitle">Discover All Categories:</h5>
                    <div className="row">
                        <ShopCatBlock title="Smartphones" url="/smartphones" />
                        <ShopCatBlock title="Desktops" url="/desktops" />
                        <ShopCatBlock title="Laptops" url="/laptops" />
                        <ShopCatBlock title="Accessories" url="/accessories" />
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ShopCategoryMain;