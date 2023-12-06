import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContactForm = (e) => {
        e.preventDefault();
        // console.log(name,email,subject,message)
    }

    return (
        <>
            <form id="contact-form" onSubmit={handleContactForm}>
                <div className="contact-form-wrap">
                    <div className="cf-field">
                        <input
                            type="text"
                            id="user-field-name"
                            className="w-100"
                            name="name"
                            value={name}
                            placeholder="Name"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="cf-field">
                        <input
                            type="email"
                            id="user-field-email"
                            className="w-100"
                            name="email"
                            value={email}
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="cf-field cf-field-cover">
                        <input
                            type="text"
                            id="user-field-subject"
                            className="w-100"
                            name="subject"
                            value={subject}
                            placeholder="Subject"
                            required
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="cf-field cf-field-cover">
                        <textarea
                            id="user-field-message"
                            className="w-100"
                            name="message"
                            value={message}
                            placeholder="Message"
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="cf-field cf-field-cover">
                        <input
                            type="submit"
                            id="user-field-submit"
                            className="d-block mx-auto w-auto"
                            value="Send Message"
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm;