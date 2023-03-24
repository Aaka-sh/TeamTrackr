import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import GuideDashboard from "./components/GuideDashboard";
import GuideUserProfile from "./components/GuideUserProfile";
import StudentDashboard from "./components/StudentDashboard";
import StudentUserProfile from "./components/StudentUserProfile";
import AddTeam from "./components/AddTeam";
import AddTask from "./components/AddTask";
import Evalution from "./components/Evaluation";
import ViewTask from "./components/ViewTask";
import AddSession from "./components/AddSession";
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
            <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route
              path="/studentuserprofile"
              element={<StudentUserProfile />}
            />
            <Route path="/addteam" element={<AddTeam />} />
            <Route path="/addtask" element={<AddTask />} />
            <Route path="/evaluation" element={<Evalution />} />
            <Route path="/viewtask" element={<ViewTask />} />
            <Route path="/addsession" element={<AddSession />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
