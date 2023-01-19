import React from "react";
import { Reglog } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={Reglog} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
