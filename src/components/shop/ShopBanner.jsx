import { Link } from "react-router-dom";
import { useState } from "react";

import ShopCategoryMain from "./ShopCategoryMain";

const ShopBanner = () => {
  const shopBannerUrl = "All_Images/homebanner.png";

  const [productSearch, setProductSearch] = useState("");
  const [productCategory, setProductCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Search Input: ${productSearch}`);
    console.log(`Product Category: ${productCategory}`);
  }

  return (
    <>
      <div
        className="common-banner shop-listing-banner position-relative "
        style={{ backgroundImage: `url(${shopBannerUrl})` }}
      >
        <div className="col-7">
                <div className="header-searchbar d-flex">
                  <form
                    id="shop-searchbar"
                    className="d-flex w-100"
                    onSubmit={handleSubmit}
                    // style={{ padding: `${padding}px` }}
                    // onClick={handleClick}
                  >
                    <div className="header-search-button col-1 pl-3 pr-0">
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                    <div className="header-search-input col-7 px-2">
                      <input
                        type="search"
                        placeholder="Search products..."
                        id="search-product"
                        name="search-product"
                        value={productSearch}
                        onChange={(event) =>
                          setProductSearch(event.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="header-search-dropdown col-4 pl-0">
                      <select
                        className="px-3"
                        id="category-list"
                        name="category-list"
                        value={productCategory}
                        onChange={(event) =>
                          setProductCategory(event.target.value)
                        }
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
        <div className="container-flud">
          <div className="plb-wrapper position-relative">
            <div className="plb-content text-center">
              {/* <h1 className="plb-title text-white">Shop Page</h1> */}

              <div className="plb-cta">
                {/* <Link
                                    to="/"
                                    className="theme-btn-v2 theme-btn-auto text-white"
                                >
                                    Explore More
                                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <ShopCategoryMain />
      </div>
    </>
  );
};

export default ShopBanner;
