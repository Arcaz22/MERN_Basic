import React from "react";
import { Reglog } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import "./register.scss";

const Register = () => {
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
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali Ke Login " />
      </div>
    </div>
  );
};

export default Register;
