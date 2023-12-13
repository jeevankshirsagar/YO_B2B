    import ShopCatBlock from "./ShopCatBlock";

    const ShopCategoryMain = () => {
        return (
            <>
                <div className="shop-cat-blocks">

                    <div className="box">
                    <div className="container">
                        <h3 className="sc-subtitle">Discover All Categories:</h3>
                        <div className="row">

                            <div className="cat_r">
                            <div className="col-md-3"> 
                            <ShopCatBlock title="Smartphones" url="/smartphones" image={'../../../All_Images/iphon-15.jpg'} />
                            </div>
                        <div className="col-md-3"> 
                        <ShopCatBlock title="Desktops" url="/desktops" image={"../../../All_Images/tv3.jpeg"} />
                        </div>
                        
                        <div className="col-md-3"> 
                            <ShopCatBlock title="Laptops" url="/laptops" image={"../../../All_Images/mcbk.jpg"} />
                            </div>
                        <div className="col-md-3">
                            <ShopCatBlock title="Accessories" url="/accessories" image={"../../../All_Images/hp-laptop-charger-adapter.jpg"} />
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>  
            </>
        )
    }

    export default ShopCategoryMain;
    


//     import ShopCatBlock from "./ShopCatBlock";

// const ShopCategoryMain = () => {
//     return (
//         <>
//             <div className="shop-cat-blocks">
//                 <div className="container-fliud">
//                     <h3 className="sc-subtitle">Discover All Categories:</h3>
//                     <div className="cat_r" style={{ display: 'flex' }}>

//                         <ShopCatBlock title="Smartphones" url="/smartphones" image={'../../../All_Images/iphon-15.jpg'} />
//                         <ShopCatBlock title="Desktops" url="/desktops" image={"../../../All_Images/tv3.jpeg"} />
//                         <ShopCatBlock title="Laptops" url="/laptops" image={"../../../All_Images/laptop.png"} />
//                         <ShopCatBlock title="Accessories" url="/accessories" image={"../../../All_Images/charger.jpg"} />

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ShopCategoryMain;
