import React from "react";
import { Reglog } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun silahkan daftar"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
