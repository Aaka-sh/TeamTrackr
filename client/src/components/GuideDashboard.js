import React from "react";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";
import GuideDashboardMain from "./GuideDashboardMain";
import GuideUserProfile from "./GuideUserProfile";

export default function GuideDashboard() {
  return (
    <>
      <GuideNavBar />
      <GuideSideBar />
      <GuideDashboardMain />
    </>
  );
}
