import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      {/* header 7 newletter */}
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
            <p>
              We send stuff which only excites and ignites your passion for IT and intresting ideas to solves your business problems.
            </p>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Aboutus</h3>
              <p>
                We Provide best consulting services using our best technology and passionate human resources{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="/Services">Services</a></li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li><a href="/">Career</a></li>
                <li><a href="/Contactus">Contact Us</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>North Carolina, USA</li>
                <li>+1-9190355-8839</li>
                <li>hr@drivelogic.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr/>
        <div className="footer-end">
<h6 className="text-center">Developed by DriveLogic</h6>
        </div>
      </div>
    </div>
  );
}
