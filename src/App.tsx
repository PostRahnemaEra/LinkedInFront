import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CompanyProfilePage } from "./Pages/CompanyProfilePage/CompanyProfilePage";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";

export const App = () => {
  return (
    <div dir="rtl" className="bg-backGroundColor" >
      <Router>
          <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/companyProfile" element={<CompanyProfilePage />} />
          </Routes>
      </Router>
    </div>
  );
}

