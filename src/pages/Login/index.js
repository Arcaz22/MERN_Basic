import React from "react";
import { Reglog } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={Reglog} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placholder="Email" />
        <Gap height={18} />
        <Input label="Password" placholder="Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Belum punya akun silahkan daftar" />
      </div>
    </div>
  );
};

export default Login;
