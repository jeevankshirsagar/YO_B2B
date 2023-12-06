import "./contact-us.css"

import ContactForm from "../components/forms/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const Contact = () => {
    return (
        <>
            <div className="contact-form-main my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 col-12 p-sm-0 px-4">
                            <div className="contact-form-col contact-form-card">
                                <h3 className="mb-4">Get in touch</h3>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12 p-sm-0 px-4 mt-lg-0 mt-5">
                            <div className="contact-form-col contact-form-data">
                                <h1 className="mb-4 text-white">Contact Us</h1>
                                <ContactDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;