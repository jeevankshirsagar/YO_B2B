import { useState } from "react";

import "./mobile-search-modal.css"

const MobileSearchModal = ({ mobileSearchModal, handleSearchModal }) => {

    const [searchParams, setSearchParams] = useState('');

    function handleSearch (event) {
        event.preventDefault();
        // console.log(searchParams);
    }

    return (
        <>
            <div className={`mobile-search-modal ${mobileSearchModal ? 'modal-up' : ''} `}>
                <div className="mobile-search-wrapper">
                    <div className="mobile-search-main position-relative">
                        <button onClick={() => handleSearchModal()} id="form-close-modal" className="close-modal">
                            <i className="bi bi-x modal-close-icon"></i>
                        </button>

                        <form id="user-search-form" onSubmit={handleSearch}>

                            <div className="mobile-search-wrap d-flex">
                                <div className="form-field form-field-cover col-10 pr-0">
                                    <input
                                        type="text"
                                        name="searchParams"
                                        id="mobile-search-input"
                                        value={searchParams}
                                        placeholder="Search..."
                                        onChange={(e) => setSearchParams(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-field form-field-submit col-2 pl-0">
                                    <button
                                        type="submit"
                                        id="mobile-search-submit-btn"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>

                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileSearchModal;