import "./shop-jumbotron.css"

const ShopJumbotron = () => {

    const shopJumbotronUrl = "All_Images/offer3.jpg";

    return (
        <>
            <div className="shop-listing-jumbotron my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sl-jumbotron-inner" style={{ backgroundImage: `url('${shopJumbotronUrl}')` }}>
                                <h4 className="slj-title">Pay the XXX due and get some exciting offers!</h4>
                                <div className="slj-content mx-auto">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopJumbotron;