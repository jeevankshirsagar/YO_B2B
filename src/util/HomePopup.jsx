import { useState, useEffect } from "react";
import "./home-popup-modal.css";

import { Link } from "react-router-dom"

const HomePopup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to show the popup after 5 seconds
    const timeoutId = setTimeout(() => {
      setModalVisible(true);
    }, 5000);

    // Clear the timeout if the component is unmounted before the timeout is reached
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  const handleModal = () => {
    setModalVisible(false);
  };

  const styles = modalVisible ? "flex" : "none";

  return (
    <>
      <div className="offer-modal-v1 offer-modal" style={{ display: styles }}>
        <div className="offer-modal-inner position-relative">
          <button onClick={handleModal} id="close-modal" className="position-absolute">
            <i className="bi bi-x modal-close-icon"></i>
          </button>
          <div className="offer-modal-box position-relative">
            <img src="All_Images/P3.png" className="d-block mx-auto" alt="Offer" />
            <div className="offer-modal-cta text-center">
              <span className="d-block mx-auto">Get the offer!</span>
            </div>
            <Link
              to="/"
              className="offer-modal-cover"
            >
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePopup;