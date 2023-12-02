import { useState } from "react";

import "./RetailLoginForm.css"

const RetailLoginForm = ({ loginModalVisible, setLoginModalVisible }) => {

    const [userId, setUserId] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [userRecoverId, setUserRecoverId] = useState('')
    const [userRecoverPhone, setUserRecoverPhone] = useState('')

    const [formAction, setFormAction] = useState(false)

    function handleLoginSubmit(event) {
        event.preventDefault();
        console.log(userId, userPassword);
    }

    function handleRecoverSubmit(event) {
        event.preventDefault();
        console.log(userRecoverId, userRecoverPhone);
    }

    const handleModal = () => {
        // console.log('Modal Close!');
        setLoginModalVisible(false);
    };

    function handleFormAction() {
        setFormAction(prevState => !prevState)
        setUserId('')
        setUserPassword('')
        setUserRecoverId('')
        setUserRecoverPhone('')
    }

    return (
        <>
            <div className={`retail-form-modal ${loginModalVisible ? 'modal-up' : ''} `}>
                <div className="retail-form-wrapper">
                    <div className="retail-form-main">
                        <button onClick={handleModal} id="form-close-modal" className="close-modal">
                            <i className="bi bi-x modal-close-icon"></i>
                        </button>

                        <div className={`retail-form-type-login retail-form-type ${formAction ? `hide` : `show`}`}>
                            <form id="retail-user-form" onSubmit={handleLoginSubmit}>

                                <h3 className="rform-title">Login</h3>

                                <div className="retail-uf-main retail-user-form-wrap">
                                    <div className="form-field form-field-cover">
                                        <label htmlFor="username">Username <span className="mark-required">*</span></label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="ru-username"
                                            required
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="password">Password <span className="mark-required">*</span></label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="ru-password"
                                            required
                                            value={userPassword}
                                            onChange={(e) => setUserPassword(e.target.value)}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="form-field form-field-submit">
                                        <input type="submit" id="ru-form-submit-btn" value="Submit" />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className={`retail-form-type-recover retail-form-type ${formAction ? 'show' : 'hide'}`}>
                            <form id="retail-account-reset" onSubmit={handleRecoverSubmit}>

                                <h3 className="rform-title">Recover account</h3>

                                <div className="retail-uf-main retail-user-form-wrap">
                                    <div className="form-field form-field-cover">
                                        <label htmlFor="username-reest">Username <span className="mark-required">*</span></label>
                                        <input
                                            type="text"
                                            name="username-reset"
                                            id="ru-username-reset"
                                            required
                                            value={userRecoverId}
                                            onChange={(e) => setUserRecoverId(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="tel-reset">Contact Number <span className="mark-required">*</span></label>
                                        <input
                                            type="tel"
                                            name="tel-reset"
                                            id="ru-tel-reset"
                                            required
                                            value={userRecoverPhone}
                                            // onChange={(e) => setUserRecoverPhone(e.target.value)}
                                            onChange={(e) => {
                                                const numericValue = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                                setUserRecoverPhone(numericValue);
                                            }}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="form-field form-field-submit">
                                        <input type="submit" id="ru-form-reset-submit-btn" value="Reset Password" />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="rental-form-action">
                            <button onClick={handleFormAction}>{formAction ? `Back To Login` : `Forgot Password?`}</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default RetailLoginForm;