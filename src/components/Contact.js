import React from "react";
import "../css/ContactInfo.css";
import Footer from "../components/Footer";

import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  console.log("Contact");
  return (
    <div className="contact__page">
      <h1>Contact Us</h1>
      <div className="contact__container">
        <div className="contact__us">
          <ul className="contact__list">
            <li>
              <h3>Phone</h3>
              <p className="phone">
                <span>
                  <PhoneIcon fontSize="medium" />
                </span>
                (203) 880-5420
              </p>
            </li>
            <li>
              <h3>Email</h3>
              <p>info@makeahomect.com</p>
            </li>
            <li>
              <h3>Address</h3>
              <p>200 Chase River Rd, Waterbury CT 06704</p>
            </li>
          </ul>
        </div>
        <div className="hours">
          <h2>Hours</h2>
          <ul className="hours__list">
            <li>Monday: Closed</li>
            <li>Tuesday: Closed</li>
            <li>Wednesday: 9-7</li>
            <li>Thursday: 9-5</li>
            <li>Friday: 9-5</li>
            <li>Saturday: 9-5</li>
            <li>Sunday: 11-3</li>
          </ul>
        </div>
        <img
          src="https://images.pexels.com/photos/5668841/pexels-photo-5668841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="picture"
        />
      </div>

      <div className="form__container">
        <h2 id="form__heading">Contact Form</h2>
        <div className="contact__form">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" />
            </label>
            <div className="message">
              <label>
                Message:
                <textarea type="text" name="message" id="message__text" />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
