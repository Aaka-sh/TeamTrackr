import React, { useState } from "react";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";

export default function EvaluationForm() {
  const [projectOverviewMarks, setProjectOverviewMarks] = useState();

  const POMarks = (event) => {
    event.preventDefault();
    console.log("Hello");
    console.log(projectOverviewMarks);
  };
  //marks table should consist
  //1. student id
  //2. guide id - the guide who is evaluating the student

  //3. CIA Component
  //3 a. Project Overview - 10 marks
  //3 b. Requirement Specification - 20 marks
  //3 c. Detailed Design - 20 marks
  //3 d. Construction - 10 marks
  //3 e. Testing - 20 marks
  //e f. Document Submission - 20 marks

  //4. ESE component
  //4 a. Project Presentation 1 - Alumni
  //4 b. Demonstration - Alumni
  //4 c. Project Presentation 2 - Department Panel
  //4 d. Demonstration - Department Panel -
  return (
    <div>
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main">
        <div className="card-body">
          <div className="pagetitle">
            <h1>CIA Components</h1>
          </div>
          <div className="d-flex flex-row gap-4 flex-wrap">
            {/* Project Overview Marks */}
            <div className="card col-lg-3 p-3 mr-5">
              <div className="card-body">
                <h5 className="card-title">Project Overview - 10 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-4 col-form-label"
                    >
                      Marks
                    </label>
                    <div className="col-md-8 col-lg-8">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 10"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-3"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Detailed Design Marks */}
            <div className="card col-lg-3 p-3 mr-5">
              <div className="card-body">
                <h5 className="card-title">Detailed Design - 20 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-4 col-form-label"
                    >
                      Marks
                    </label>
                    <div className="col-md-8 col-lg-8">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 20"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-3"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Construction Marks */}
            <div className="card col-lg-3 p-3 mr-5">
              <div className="card-body">
                <h5 className="card-title">Construction - 10 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-4 col-form-label"
                    >
                      Marks
                    </label>
                    <div className="col-md-8 col-lg-8">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 10"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-3"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Testing Marks */}
            <div className="card col-lg-3 p-3 mr-5">
              <div className="card-body">
                <h5 className="card-title">Component Testing - 20 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-4 col-form-label"
                    >
                      Marks
                    </label>
                    <div className="col-md-8 col-lg-8">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 20"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-3"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Documentation Marks */}
            <div className="card col-lg-3 p-3 mr-5">
              <div className="card-body">
                <h5 className="card-title">Documentation - 20 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-4 col-form-label"
                    >
                      Marks
                    </label>
                    <div className="col-md-8 col-lg-8">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 20"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-3"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ESE Components */}
        <div className="card-body">
          <div className="pagetitle">
            <h1>ESE Components</h1>
          </div>
          <div className="d-flex flex-row gap-4 flex-wrap">
            {/* Department Panel Evaluation Marks */}
            <div className="card col-lg-5 p-3">
              <div className="card-body">
                <h5 className="card-title">Alumni Evaluation - 50 Marks</h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-9 col-form-label"
                    >
                      Presentation
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 10"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-9 col-form-label"
                    >
                      Demonstration
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 40"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-4"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Department Panel Evaluation Marks */}
            <div className="card col-lg-5 p-3">
              <div className="card-body">
                <h5 className="card-title">
                  Department Panel Evaluation - 50 Marks
                </h5>

                <form>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-9 col-form-label"
                    >
                      Presentation
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 10"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="guide_id"
                      className="col-md-4 col-lg-9 col-form-label"
                    >
                      Demonstration
                    </label>
                    <div className="col-md-8 col-lg-9">
                      <input
                        name="teamNumber"
                        type="text"
                        className="form-control col-lg-12"
                        id="teamNumber"
                        defaultValue=""
                        placeholder="Out of 40"
                        onChange={(e) => {
                          setProjectOverviewMarks(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100 mt-4"
                      style={{ backgroundColor: "#012971", color: "white" }}
                      onClick={(e) => {
                        POMarks(e);
                      }}
                    >
                      Submit Marks
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
