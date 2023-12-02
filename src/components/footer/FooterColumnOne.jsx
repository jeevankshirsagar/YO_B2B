import { useState } from "react";

const FooterColumnOne = () => {

    const [newsLetterEmail, setNewsLetterEmail]  = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(newsLetterEmail);
    }

    return (
        <>
            <div className="col-xl-4 col-lg-12">
                <img src="https://placehold.co/160x60.svg" alt="site-logo" />

                <div className="footer-form my-4">
                    <p className="mb-2">Get the latest updates on new products</p>

                    <form id="newsletter-form" className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="col-9 p-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            id="newsletter-email"
                            name="newsletter-email"
                            value={newsLetterEmail}
                            onChange={(e) => setNewsLetterEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div className="col-3 p-0">
                            <div className="footer-nl-btn">
                                <input type="submit" value="Submit" placeholder="Submit" />
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default FooterColumnOne;