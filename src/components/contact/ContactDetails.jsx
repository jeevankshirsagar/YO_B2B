import { useState } from "react";

const ContactDetails = () => {

const [isProtected, setIsProtected] = useState(true);

function checkProtection() {
    setIsProtected(prevState => !prevState)
}

    return (
        <>
            <div className="contact-data-item-wrap">
                <div className="contact-data-item">
                    <div className="contact-data-icon col-auto pl-0">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="contact-data-meta col-md-11 p-0">
                        <p>09, Basement Ashoka Shopping Centre, Lokmanya Tilak Rd, Mumbai, Maharashtra 400001</p>
                    </div>
                </div>
                <div className="contact-data-item">
                    <div className="contact-data-icon col-auto pl-0">
                        <i className="bi bi-telephone"></i>
                    </div>
                    <div className="contact-data-meta col-md-11 p-0">
                        <p><a href="tel:02222614390">022 2261 4390</a></p>
                    </div>
                </div>
                <div className="contact-data-item">
                    <div className="contact-data-icon col-auto pl-0">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="contact-data-meta col-md-11 p-0">
                        {isProtected && <p onMouseEnter={checkProtection}>[email protected]</p> }
                        {!isProtected && <p onMouseOut={checkProtection}><a href="mailto:example@gmail.com">example@gmail.com</a></p> }
                    </div>
                </div>
                <div className="contact-data-item">
                    <div className="contact-data-meta col-auto pl-0">
                        <i className="bi bi-link-45deg"></i>
                    </div>
                    <div className="contact-data-meta col-md-11 p-0">
                        <p><a target="_blank" href="/">yoursite.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactDetails;