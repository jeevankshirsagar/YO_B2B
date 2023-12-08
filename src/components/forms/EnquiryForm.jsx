import React from 'react';

import "./enquiry-form.css";

import { useModal } from '../../contexts/ModalContext';

const EnquiryForm = () => {
  
  const { enquiryModalVisible, hideModal } = useModal();

  const [formData, setFormData] = React.useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    business_address: '',
    quantity: '',
    attributes: '',
    budget: 10
  });

  const [currentStep, setCurrentStep] = React.useState(1);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    let updatedValue;
  
    if (type === 'number' || type === 'range') {
      updatedValue = value === '' || isNaN(value) ? '' : parseInt(value);
    } else if (name === 'phone') {
      // For the "Phone Number" field, allow only numeric values
      updatedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    } else {
      updatedValue = value;
    }
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const validateFormStep = (step) => {
    switch (step) {
      case 1:
        return formData.full_name !== '' && formData.email !== '' && formData.phone !== '';
      case 2:
        return formData.company_name !== '' && formData.business_address !== '';
      case 3:
        return formData.quantity !== '' && formData.attributes !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <>
      <div className={`product-form-modal ${enquiryModalVisible ? 'modal-up' : ''} `}>
        <div className="product-form-wrapper">
          <div className="product-form-data">
            <div className="product-form-image">
              <img src="../../../All_Images/iphon-15.jpg" alt="product" />
            </div>
            <div className="product-form-meta">
              <h4>Product Name Here</h4>
              <h5><span className="pf-price pf-variant">₹ 70</span>/ Piece</h5>
              <h6>Sold By - <span className="pf-user pf-variant">Admin</span></h6>
            </div>
          </div>
          <div className="product-form-main">
            <button onClick={hideModal} id="form-close-modal" className="close-modal">
              <i className="bi bi-x modal-close-icon"></i>
            </button>
            <h3 className="pform-title">Contact Seller</h3>
            <span className="form-note">All fields marked with <span className="mark-required">*</span> are mandatory</span>
            <form id="product-form-main" onSubmit={handleSubmit}>

              {/* STEP 1 */}

              <div className={`form-step-wrap form-step form-step-one ${currentStep === 1 ? 'visible' : 'hidden'}`}>
                <div className="pform-wrapper">
                  <div className="form-field form-field-cover">
                    <label htmlFor="full_name">Full Name <span className="mark-required">*</span></label>
                    <input
                      type="text"
                      name="full_name"
                      id="user-fullname"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address <span className="mark-required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      id="user-email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number <span className="mark-required">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      id="user-phone"
                      pattern="[0-9]*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-actions form-field-cover">
                    <button
                      type="button"
                      className="form-action-next"
                      onClick={handleNext}
                      disabled={!validateFormStep(1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* STEP 2 */}

              <div className={`form-step-wrap form-step form-step-two ${currentStep === 2 ? 'visible' : 'hidden'}`}>
                <div className="pform-wrapper">
                  <div className="form-field form-field-cover">
                    <label htmlFor="company_name">Company Name <span className="mark-required">*</span></label>
                    <input
                      type="text"
                      name="company_name"
                      id="user-company-name"
                      required
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field form-field-cover">
                    <label htmlFor="business_address">Business Address <span className="mark-required">*</span></label>
                    <textarea
                      name="business_address"
                      id="user-address"
                      required
                      value={formData.business_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-actions form-field-cover">
                    <button
                      type="button"
                      className="form-action-prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="form-action-next"
                      onClick={handleNext}
                      disabled={!validateFormStep(2)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}

              <div className={`form-step-wrap form-step form-step-three ${currentStep === 3 ? 'visible' : 'hidden'}`}>
                <div className="pform-wrapper">
                  <div className="form-field form-field-cover">
                    <label htmlFor="quantity">Quantity <span className="mark-required">*</span></label>
                    <input
                      name="quantity"
                      type="number"
                      id="product-quantity"
                      pattern="[0-9]*"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field form-field-cover">
                    <label htmlFor="attributes">Choose Attribute <span className="mark-required">*</span></label>
                    <select
                      id="user-attributes"
                      name="attributes"
                      value={formData.attributes}
                      onChange={handleChange}
                    >
                      <option>Choose Color</option>
                      <option>Red</option>
                      <option>Yellow</option>
                      <option>Green</option>
                    </select>
                  </div>
                  <div className="form-actions form-field-cover">
                    <button
                      type="button"
                      className="form-action-prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="form-action-next"
                      onClick={handleNext}
                      disabled={!validateFormStep(3)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* STEP 4 */}

              <div className={`form-step-wrap form-step form-step-four ${currentStep === 4 ? 'visible' : 'hidden'}`}>
                <div className="pform-wrapper">
                  <div className="form-field form-field-cover">
                    <label htmlFor="budget">Budget: {formData.budget}</label>
                    <input
                      type="range"
                      name="budget"
                      id="user-budget"
                      required
                      value={formData.budget}
                      min="10"
                      max="100"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-actions form-field-cover">
                    <button
                      type="button"
                      className="form-action-prev"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                  </div>
                  <div className="form-field form-field-cover form-field-submit">
                    <input type="submit" id="form-submit-btn" placeholder="Submit" />
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );

};

export default EnquiryForm;
