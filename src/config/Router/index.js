import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<MainApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
