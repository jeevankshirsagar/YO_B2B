import { useState } from "react";

import "./header.css"

const Header = () => {

    const [productSearch, setProductSearch] = useState('');
    const [productCategory, setProductCategory] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Search Input: ${productSearch}`);
        console.log(`Product Category: ${productCategory}`);
    }

    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="row header-wrapper justify-content-between align-items-center">
                        <div className="col-2 pl-0">
                            <a className="navbar-brand m-0 p-0" href="/">
                                <img src="https://placehold.co/150x80.svg" width="150" height="80" alt="site-logo" />
                            </a>
                        </div>
                        <div className="col-7">
                            <div className="header-searchbar d-flex">
                                <form id="product-searchbar" className="d-flex w-100" onSubmit={handleSubmit}>
                                    <div className="header-search-button col-1 pl-3 pr-0">
                                        <button type="submit"><i className="bi bi-search"></i></button>
                                    </div>
                                    <div className="header-search-input col-7 px-2">
                                        <input
                                            type="search"
                                            placeholder="Search products..."
                                            id="search-product"
                                            name="search-product"
                                            value={productSearch}
                                            onChange={(event) => setProductSearch(event.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="header-search-dropdown col-4 pl-0">
                                        <select
                                            className="px-3"
                                            id="category-list"
                                            name="category-list"
                                            value={productCategory}
                                            onChange={(event) => setProductCategory(event.target.value)}
                                        >
                                            <option value="all">All Categories</option>
                                            <option value="smartphones">Smartphones</option>
                                            <option value="desktop">Desktop</option>
                                            <option value="laptops">Laptops</option>
                                            <option value="accessories">Accessories</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-auto pr-0 d-flex justify-content-end">

                            {/* NON LOGIN */}

                            <div className="account-meta">
                                <a href="#" className="d-flex">
                                    <i className="bi bi-person"></i>
                                    <span>Log In</span>
                                </a>
                            </div>

                            {/* LOGGED IN */}

                            {/*
                                <div className="account-meta">
                                    <a href="#" className="d-flex">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </div>
                            */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;