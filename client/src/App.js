import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import HomeMain from "./components/HomeMain";
import Navbar from "./components/Navbar";
import GuideDashboard from "./components/GuideDashboard";
import GuideUserProfile from "./components/GuideUserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/guidedashboard" element={<GuideDashboard />} />
            <Route path="/guideuserprofile" element={<GuideUserProfile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
