import { useState } from "react";
import "./home-styles.css";

const SliderBanner = () => {
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
        id="homeBannerSlider"
        className="carousel slide home-banner-slider"
        data-ride="carousel"
      >
        <div className="col-7">
          <div className="header-searchbar d-flex">
            <form
              id="product-searchbar"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="All_Images/p4.png"
              alt="First slide"
            />
            <a href="#" className="cover-banner"></a>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="All_Images/p4.png"
              alt="Second slide"
            />
            <a href="#" className="cover-banner"></a>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="All_Images/p4.png"
              alt="Third slide"
            />
            <a href="#" className="cover-banner"></a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#homeBannerSlider"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#homeBannerSlider"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default SliderBanner;
