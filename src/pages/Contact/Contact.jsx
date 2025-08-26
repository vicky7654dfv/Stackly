import React from "react";
import Style from "./Contact.module.css";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Contact/1.jpg";
import Img2 from "../../assets/Contact/2.jpg";

export default function Contact() {
  return (
    <div className={Style.cntWrap}>
      <div className={Style.cntHead}>
        <h1>CONTACT US</h1>
        <div className={Style.innerDiv}>
          <Link to="/">Home</Link> <sup>&nbsp; | &nbsp;</sup>
          <h4>Contact</h4>
        </div>
      </div>
      <div className={Style.detailsDiv}>
        <div className={Style.imgWrap}>
          <img src={Img2} alt="pic" />
        </div>
        <div className={Style.textWrap}>
          <h2>Let's make your brand brilliant!</h2>
          <p>
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </p>
          <div className={Style.branchDiv}>
            <div className={Style.branches}>
              <h4>Headquarters</h4>
              <p>
                MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil,
                Salem, Tamil Nadu 636008
              </p>
            </div>
            <div className={Style.branches}>
              <h4>Branch Office</h4>
              <p>
                #2, Crystal Plaza, Near KCT Tech Park, Thudiyalur Main Road,
                Saravanampatti, Coimbatore, Tamilnadu, India - 641035
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.imgDiv}>
        <img src={Img1} alt="pic" />
      </div>
    </div>
  );
}
