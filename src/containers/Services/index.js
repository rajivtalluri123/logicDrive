import React, {useState} from 'react'
import { ServicesText } from "./data";
import {AiOutlineNotification,
    AiOutlineFileSearch,
    AiOutlineTeam,
    AiOutlineSync,
    AiOutlineFundView,
    AiOutlineProject,
  } from "react-icons/ai";
import './style.css';
import LearnMore from "../../components/modals";
  

export default function Services() {
   const sayMore = (event) => {
     alert("more more");
  }
  const [show, setShow] = useState({
    title:'this is header',
    content:'this is content'
  });
    return (
        <div>
             <div className="serviceshome">
             {/*<div className="page-title-area">
        <h1>Our Services</h1>
      </div>*/}
          <div className="container">
            <div className="servicesheader">
              <h6>{ServicesText.serviceshome_subheader}</h6>
              <h4>{ServicesText.serviceshome_header}</h4>
              <p>{ServicesText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineNotification className="icon1" />
                  <h4>{ServicesText.services_box_title1}</h4>
                  <p>{ServicesText.services_box_des}</p>
                    <LearnMore details={{title:'Web Development', content:'Our team has a wealth of experience in web development and a track record of delivering high-quality solutions for both backend and frontend needs of clients.' +
                          ' We are skilled in a range of programming languages and technologies, and have passion to constantly learn and give more expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our web development team, and we have received positive feedback from clients on the work they have done in the past.' +
                          ' We\'re proud to have a talented and experienced team of web developers on our side.'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon2" />
                  <h4>{ServicesText.services_box_title2}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Data Engineer', content:'Our team have engineers who are responsible for designing, building and maintaining the systems and infrastructure that are used to store, process, and analyze data.' +
                        ' Their work is essential for enabling organizations to make informed decisions based on data insights. Our talented Data Engineers are specialized in Data warehousing, Data pipelines, Data processing, Cloud computing, Data security and compliance.'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon3" />
                  <h4>{ServicesText.services_box_title3}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Quality Analysis', content:'we have professionals who are responsible for ensuring that the products or services produced by an organization meet the desired level of quality and performance.' +
                        ' They use a variety of tools and techniques to evaluate the quality of products or services, identify areas for improvement, and implement changes to ensure that the organization\'s products or services meet the necessary standards.' +
                        'Some of the specialties that our quality analysis engineers have includes but not limited are Software quality assurance, Quality control, Process improvement, Six Sigma, Lean manufacturing, Total quality management. '}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon3" />
                  <h4>{ServicesText.services_box_title4}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Devops', content:'Our team has a wealth of experience in devops pratices and a track record of delivering high-quality solutions for platform and monitor needs of clients.' +
                        ' We are skilled in a range of programming languages and technologies in this area, and have passion to constantly learn and give expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our devops team, and we have received positive feedback from clients on the work they have done in the past.' +
                        ' We\'re proud to have a talented and experienced team of devops engineer on our side.'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon2" />
                  <h4>{ServicesText.services_box_title5}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'SRE', content:' We are skilled in a range of programming languages and technologies in this area, and have passion to constantly learn and give expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our SRE team, and we have received positive feedback from clients on the work they have done in the past.' +
                        ' We\'re proud to have a talented and experienced team of SRE engineer on our side.'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon1" />
                  <h4>{ServicesText.services_box_title6}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Business Analysts', content:' We are skilled in a range of technologies in this area, and have passion to constantly learn and give expectional experience, which allows us to offer our clients cutting-edge solutions. We are confident in the abilities of our BA team, and we have received positive feedback from clients on the work they have done in the past.' +
                        ' We\'re proud to have a talented and experienced team of BA on our side.'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


