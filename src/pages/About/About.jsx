import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import Banner from "../../components/Banner/Banner";
import Style from "./About.module.css";
import { Link } from "react-router-dom";
import Img1 from "../../assets/AboutUs/1.jpg";

export default function About() {
  return (
    <div>
      <div className={Style.headDiv}>
        <h1>ABOUT US</h1>
        <div className={Style.innerHeadDiv}>
          <Link to="/">Home</Link> <sup>&nbsp; | &nbsp;</sup>
          <h4>About Us</h4>
        </div>
        <div className={Style.imgDiv}>
          <p>
            Stackly is a powerful platform that streamlines workflow, enhances
            efficiency, and drives digital success. It offers a user-friendly
            experience with seamless integration, making it an essential tool
            for businesses and individuals looking to optimize their online
            operations. Founded in 2015, Stackly has grown into one of the
            leading and most innovative IT companies in the industry. With a
            team of over 120 talented professionals, we specialize in delivering
            cutting-edge technology solutions that drive business success. Our
            commitment to innovation, excellence, and customer satisfaction has
            positioned us as a trusted partner for businesses seeking to
            leverage technology for growth and efficiency.
          </p>
          <img src={Img1} alt="pic" />
        </div>
        <div className={Style.projectDiv}>
          <div className={Style.paraDiv}>
          <h2>Have a project in your mind?</h2>
          <h2><Link to={"/Contact"}>Let's get to work.</Link></h2>
          </div>
          <div className={Style.rightSideDiv}>
          <h4>Useful links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Services"}>Services</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>
          </ul>
          </div>
        </div>
      </div>
      <UserDetails />
    </div>
  );
}
