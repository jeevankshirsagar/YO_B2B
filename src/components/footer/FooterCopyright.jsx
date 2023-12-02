
import payment from "./payments-img.png"

const FooterCopyright = () => {

    const paymentSize = {
        height: '30px'
    }

    return (
        <>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row align-center">
                        <div className="footer-copy-line w-100"></div>
                        <div className="col-lg-6 col-md-12 footer-copy-text">
                            <p className="text-white">Copyright by Yo Digitals. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 footer-payments">
                            <img src={payment} className="ml-auto d-block ml-auto" style={paymentSize} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterCopyright;