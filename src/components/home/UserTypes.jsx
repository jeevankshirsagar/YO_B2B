import { Link } from "react-router-dom";

import "./user-types.css"

const UserTypes = ({ setLoginModalVisible }) => {

    const showModal = () => {
        // console.log('Modal Up!');
        setLoginModalVisible(true);
    };

    return (
        <>
            <div className="user-types my-5">
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-lg-3 col-md-6">
                            <div className="user-type-card">
                                <img src="All_Images/retail4.jpg" />
                                <span className="ut-title">Retail</span>

                                {/* If Logged In */}
                                {/* <Link to="/" className="cover-card"></Link> */}

                                {/* If Not Logged In */}
                                <button onClick={showModal} className="cover-card"></button>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="user-type-card">
                                <img src="All_Images/corporate3.jpeg" />
                                <span className="ut-title">Corporate</span>
                                <Link to="shop" className="cover-card"></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="user-type-card">
                                <img src="https://placehold.co/1000x1000.svg" />
                                <span className="ut-title">Individual</span>
                                <Link to="shop" className="cover-card"></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="user-type-card">
                                <img src="https://placehold.co/1000x1000.svg" />
                                <span className="ut-title">Other</span>
                                <Link to="shop" className="cover-card"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserTypes;