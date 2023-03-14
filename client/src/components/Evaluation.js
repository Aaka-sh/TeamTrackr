import React from "react";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";

export default function Evalution() {
  return (
    <>
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main">
        <div className="card-body">
          <h5 className="card-title">
            Sales <span>| Today</span>
          </h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-cart" />
            </div>
            <div className="ps-3">
              <h6>145</h6>
              <span className="text-success small pt-1 fw-bold">12%</span>{" "}
              <span className="text-muted small pt-2 ps-1">increase</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
