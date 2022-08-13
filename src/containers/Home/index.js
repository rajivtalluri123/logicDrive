import React from "react";
import { HomePageText } from "./data";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import  team1  from "../../assets/Images/team_1.jpg";
import  team2  from "../../assets/Images/team_2.jpg";
import  team3  from "../../assets/Images/team_3.jpg";
import  team4  from "../../assets/Images/team_4.jpg";
import  team5  from "../../assets/Images/team_5.jpg";
import  team6  from "../../assets/Images/team_6.jpg";
import  aboutus  from "../../assets/Images/about-us.jpg";
import  test  from "../../assets/Images/test.jpg";


import {
  AiOutlineRocket,
  AiOutlineSketch,
  AiOutlineRise,
  AiOutlineSend,
  AiOutlineMail,
  AiOutlineBlock,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";
import Aboutus from "../Aboutus";
import Services from "../Services";
import Team from "../Team";

function Home({ header, subheader, subheader1 }) {
  return (
    <div>
      <section>
        <Slideshow />

        <div className="container">
          <div className="header-section mt-5 pt-5">
            <h6>{HomePageText.subheader1}</h6>
            <h1>{HomePageText.header}</h1>
            <p>{HomePageText.subheader}</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRise className="icon1" />
                <h4>{HomePageText.services_title1}</h4>
                <p>{HomePageText.services_subheading}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineRocket className="icon2" />
                <h4>{HomePageText.services_title2}</h4>
                <p>{HomePageText.services_subheading}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineMail className="icon3" />
                <h4>{HomePageText.services_title3}</h4>
                <p>{HomePageText.services_subheading}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Header 2  about */}
        <Aboutus />


        {/* Header 3 services */}
        <Services />

        {/* Header 4 test */}
       {/* <div className="home-test">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="">
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div>
            </div>
          </div>
        </div>*/}

        {/* Header 5 team */}
      {/* <Team />*/}

        {/* header 6 price */}
        {/*add later point time*/}
      </section>
    </div>
  );
}

export default Home;
