
import "./home-styles.css"

const SliderBanner = () => {
    return (
        <>
            <div id="homeBannerSlider" className="carousel slide home-banner-slider" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://placehold.co/1920x600.svg" alt="First slide" />
                        <a href="#" className="cover-banner"></a>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://placehold.co/1920x600.svg" alt="Second slide" />
                        <a href="#" className="cover-banner"></a>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://placehold.co/1920x600.svg" alt="Third slide" />
                        <a href="#" className="cover-banner"></a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#homeBannerSlider" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#homeBannerSlider" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default SliderBanner;