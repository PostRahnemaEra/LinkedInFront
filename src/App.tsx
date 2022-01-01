import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { UserProfile } from "./Pages/Profile/UserProfile/UserProfile";
import { Register } from "./Pages/Register/Register";

export const App = () => {
  return (
    <div dir="rtl" className="main" >
      <Router>
          <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/userprofile" element={<UserProfile />} />
          </Routes>
      </Router>
    </div>
  );
}

