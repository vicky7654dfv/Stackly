import React, { useState } from "react";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import ImgBg from '../../assets/SignUp/sideLogo.png'
export default function Login() {

    const navigate=useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(`Email: ${form.email}\nPassword: ${form.password}`);
    navigate("/")
  };

  return (
    <div className={Style.loginWrap}>
      <div className={Style.imgWrap}>
              <img src={ImgBg} alt="sidePic" />
            </div>
        <form className={Style.formFillWrap} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            className={`${Style.emailClass} ${Style.commonClass}`}
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className={`${Style.passwordClass} ${Style.commonClass}`}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={Style.submitClass}>
            Submit
          </button>
        </form>
    </div>
  );
}
