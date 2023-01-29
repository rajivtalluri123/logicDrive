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
                    <LearnMore details={{title:'Web Development', content:'wd data'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon2" />
                  <h4>{ServicesText.services_box_title2}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Data Engineer', content:'wd data'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon3" />
                  <h4>{ServicesText.services_box_title3}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Quality Analysis', content:'wd data'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon3" />
                  <h4>{ServicesText.services_box_title4}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Devops', content:'wd data'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon2" />
                  <h4>{ServicesText.services_box_title5}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'SRE', content:'wd data'}} />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon1" />
                  <h4>{ServicesText.services_box_title6}</h4>
                  <p>{ServicesText.services_box_des}</p>
                  <LearnMore details={{title:'Business Analysts', content:'wd data'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


