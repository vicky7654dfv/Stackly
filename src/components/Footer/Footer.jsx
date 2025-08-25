import React, { useContext, useState } from "react";
import Style from "./Footer.module.css";
import ImgLogo from "../../assets/Header/logo-stackly.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
export default function Footer() {
   const [mobile, setMobile] = useState("");
    const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setMobile(value);
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setMobile("");
   alert("Your response has been received. We will connect with you shortly.")
  };

   const { theme } = useContext(ThemeContext);

  return (
    <>
    <div className={Style.footerWrap}  style={{
          background: theme === "light" ? "#eee4b1" : "#111",
          color: theme === "light" ? "#000" : "#fff",
        }}>
      <div className={Style.contactWrap}>
        <ul>
          <h4>
            Headquarters <br />
            <li>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#332e2eff" }}
              />
              MMR Complex, Salem, Tamil Nadu - 636008.
            </li>
          </h4>
          <h4>
            Mobile <br />
            <li>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#fcf23aff" }}
              />
              +91 70107 92745
            </li>
          </h4>
          <h4>
            WhatsApp <br />
            <li>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#00ffb3" }} />
              +91 96257 92745
            </li>
          </h4>
          <h4>
            Email <br />
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#ff9b3dff" }}
              />
              info@thestackly.com
            </li>
          </h4>
          <hr className={Style.hrLine} />
        </ul>
        <div className={Style.iconWrap}>
          <h1>
            <a
              href="https://www.facebook.com/people/Stackly-Stackly/pfbid02NbpZMuS3xtha6HC2dB7L2Rm54tBiguFNjgUSY3r6s4vZbSAKSeXeFqDJvuc3TXsHl/?rdid=GEWnkzMaud8x7Tkj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BrqaZkJRe%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#3baaffff" }}
              />
            </a>
          </h1>
          <h1>
            <a
              href="https://x.com/The_Stackly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} style={{ color: "#000000" }} />
            </a>
          </h1>
          <h1>
            <a
              href="https://www.instagram.com/the_stackly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ff3b76ff" }}
              />
            </a>
          </h1>
          <h1>
            <a
              href="https://www.linkedin.com/company/the-stackly/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#3290fcff" }}
              />
            </a>
          </h1>
        </div>
      </div>
      <div className={Style.chatWrap}>
        <div className={Style.headDiv}>
          <h2>Connect with Us</h2>
          <h5>Send your query</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={Style.rowDiv}>
            <div className={Style.withinRow}>
              <input type="text" placeholder="Name" required />
            </div>
            <div className={Style.withinRow}>
              <input type="email" placeholder="Email (optional)" />
            </div>
          </div>
          <div className={Style.rowDiv}>
            <div className={Style.withinRow}>
              <input
      type="text"
      placeholder="(+91) Mobile number"
      maxLength="10"
      value={mobile}
      onChange={handleChange}
      inputMode="numeric"
      required
    />
            </div>
            <div className={Style.withinRow}>
              <select required>
                <option value="1" hidden>
                  Select an option
                </option>
                <option value="2">Complaint</option>
                <option value="3">Suggestion</option>
                <option value="4">Work related</option>
                <option value="5">Other</option>
              </select>
            </div>
          </div>
          <div className={Style.rowDiv}>
            <div className={Style.withinRow}>
              <input
                className={Style.subjectDiv}
                type="text"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className={Style.rowDiv}>
            <div className={Style.withinRow}>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <div className={Style.rowDiv}>
            <div className={Style.withinRow}>
              <button>Let's talk</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      <div className={Style.footerEndWrap}>
        <img src={ImgLogo} alt="img" />
        <div className={Style.linksDiv}>
        <Link to={"/Services"}>Services</Link>
        <Link to={"/Contact"}>Contact Us</Link>
        </div>
        <h3>© 2025 Copyright Stackly. All Rights Reserved.</h3>
      </div>
    </>
  );
}
