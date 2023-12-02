import "./footer.css"
import FooterColumnFour from "./FooterColumnFour";

import FooterColumnOne from "./FooterColumnOne";
import FooterColumnThree from "./FooterColumnThree";
import FooterColumnTwo from "./FooterColumnTwo";

import FooterCopyright from "./FooterCopyright";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-between">
                        <FooterColumnOne />
                        <FooterColumnTwo />
                        <FooterColumnThree />
                        <FooterColumnFour />
                    </div>
                </div>
                <FooterCopyright />
            </footer>
        </>
    )
}

export default Footer;