import React from "react";
import { Reglog } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import "./register.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={Reglog} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placholder="Email" />
        <Gap height={18} />
        <Input label="Password" placholder="Password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => navigate("/login")} />
        <Gap height={100} />
        <Link title="Kembali Ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
