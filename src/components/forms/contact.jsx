// ContactForm.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Form submitted:", formData);
      // You can add your form submission logic, e.g., send data to a server.
    };
  
    return (


        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Contact </h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
                <div className="wrapper">
                    <div className="row no-gutters">
                        <div className="col-md-7 d-flex align-items-stretch">
                            <div className="contact-wrap w-100 p-md-5 p-4">
                                <h3 className="mb-4">Get in touch</h3>
                                <div id="form-message-warning" className="mb-4"></div>
                                <div id="form-message-success" className="mb-4">
                                    Your message was sent, thank you!
                                </div>
                                <form method="POST" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                               
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-corimntrol" id="message" cols="50" rows="10" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="submit" value="Send Message" className="btn btn-primary"/>
                                                <div className="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-stretch">
                            <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                <h3 className="mb-4 mt-md-4">Contact us</h3>
                                <div className="dbox w-100 d-flex align-items-start">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className=" bi bi-geo-alt-fill"></span>
                                        {/* <FontAwesomeIcon icon="fa-duotone fa-envelope" style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff",}} /> */}
                                        {/* <i class=></i> */}
                                    </div>
                                    <div className="text pl-3">
                                      
                                        <p ><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                          
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="bi bi-phone-fill"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                         <span className="fa-sharp fa-regular fa-envelope"></span>  
                                    </div>
                                    <div className="text pl-3">
                                        <p><span >Email:</span> <a href="/cdn-cgi/l/email-protection#b5dcdbd3daf5ccdac0c7c6dcc1d09bd6dad8"><span className="__cf_email__" data-cfemail="9ef7f0f8f1dee7f1ebecedf7eafbb0fdf1f3">[email&#160;protected]</span></a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="bi bi-link-45deg"></span>
                                    </div>
                                    <div className="text pl-3 ">
                                        <p><span >Website</span> <a href="#">yoursite.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>










    );
  };
  
//   export default ContactForm;
  
export default ContactForm;
