import React from "react";
import "./style.css";
import { slideshowText } from "./data";
import home_img_right from "../../assets/Images/Home-page-right.jpg";
import drivelogic from "../../assets/Images/driveLogic.png";

function Slideshow({ subheadering1, heading, subheading }) {
  return (
    <section className="home">
      <div className="container">
        <div className="row">


         {/*   <div className="header-section mt-2 pt-2">
              <img
                  src={drivelogic}
                  className="img-fluid mt-2 mb-2 home_img_right"
                  alt="img"
              />
            </div>*/}

          <div className="col-lg-6 col-md-6 col-12">
            <div className="slideshow-text">
              <h6>{slideshowText.subheadering1}</h6>
              <h3>{slideshowText.heading}</h3>
              <p>{slideshowText.subheading}</p>
              {/*couldnt route to about us*/}
                {/*<button className="btn about-btn mt-5 mb-5">About Us</button>*/}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img
              src={home_img_right}
              className="img-fluid mt-5 mb-5 home_img_right"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Slideshow;
