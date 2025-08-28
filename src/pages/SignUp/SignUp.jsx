import React, { useState } from "react";
import Style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import ImgBg from '../../assets/SignUp/sideLogo.png'
export default function SignUp() {

    const navigate=useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password do not match");
      return;
    }
    if (!Object.values(rules).every(Boolean)) {
      alert("Password does not meet all requirements");
      return;
    }
    alert(`Name: ${form.name}\n Email: ${form.email}\n Phone: ${form.phone}`);
    navigate("/")
  };

  return (
    <div className={Style.signUpWrap}>
      <div className={Style.imgWrap}>
        <img src={ImgBg} alt="sidePic" />
      </div>
      <form className={Style.signUpForm} onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <div className={Style.firstRow}>
<input
          type="text"
          className={`${Style.nameClass} ${Style.commonClass}`}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className={`${Style.emailClass} ${Style.commonClass}`}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        </div>
        
        <input
          type="tel"
          className={`${Style.phoneClass} ${Style.commonClass}`}
          name="phone"
          placeholder="Mobile number (Optional)"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          className={`${Style.passwordClass} ${Style.commonClass}`}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => {
            handleChange(e);
            setRules(validatePassword(e.target.value));
          }}
          required
        />
        <input
          type="text"
          className={`${Style.confirmPasswordClass} ${Style.commonClass}`}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={
            handleChange
          }
          required
        />
        <button type="submit" className={Style.submitClass}>
          Submit
        </button>
      </form>
    </div>
  );
}
