import React from "react";
import StudentNavBar from "./StudentNavBar";
import StudentSideBar from "./StudentSideBar";
import StudentDashboardMain from "./StudentDashboardMain";
import StudentUserProfile from "./StudentUserProfile";

export default function GuideDashboard() {
  return (
    <>
      <StudentNavBar />
      <StudentSideBar />
      <StudentDashboardMain />
    </>
  );
}
