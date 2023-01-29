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
  AiOutlineProject, AiOutlineMonitor, AiTwotoneDatabase, AiOutlineDatabase, AiTwotoneCode, AiFillCode,
} from "react-icons/ai";
import Aboutus from "../Aboutus";
import Services from "../Services";
import Team from "../Team";
import LearnMore from "../../components/modals";

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
                <AiFillCode className="icon1" />
                <h4>{HomePageText.services_title1}</h4>
                <p>{HomePageText.services_subheading}</p>
                <LearnMore details={{title:'Web Development-Full_Stack', content:'Our team has a wealth of experience in web development and a track record of delivering high-quality solutions for both backend and frontend needs of clients.' +
                      ' We are skilled in a range of programming languages and technologies, and have passion to constantly learn and give more expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our web development team, and we have received positive feedback from clients on the work they have done in the past.' +
                      ' We\'re proud to have a talented and experienced team of web developers on our side.'}} />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineDatabase className="icon2" />
                <h4>{HomePageText.services_title2}</h4>
                <p>{HomePageText.services_subheading}</p>
                <LearnMore details={{title:'Big Data Solutions', content:'Our team has a wealth of experience in data engineering and a track record of delivering high-quality solutions for data needs of clients.' +
                      ' We are skilled in a range of programming languages and technologies, and have passion to constantly learn and give more expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our data engineer team, and we have received positive feedback from clients on the work they have done in the past.' +
                      ' We\'re proud to have a talented and experienced team of big data developers on our side.'}} />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
              <div className="services-box">
                <AiOutlineMonitor className="icon3" />
                <h4>{HomePageText.services_title3}</h4>
                <p>{HomePageText.services_subheading}</p>
                <LearnMore details={{title:'DevOps Solutions', content:'Our team has a wealth of experience in devops pratices and a track record of delivering high-quality solutions for platform and monitor needs of clients.' +
                      ' We are skilled in a range of programming languages and technologies in this area, and have passion to constantly learn and give expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our devops team, and we have received positive feedback from clients on the work they have done in the past.' +
                      ' We\'re proud to have a talented and experienced team of devops engineer on our side.'}} />
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
