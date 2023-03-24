import React, { useState } from "react";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";
import Axios from "axios";

export default function AddTask() {
  const [taskNumber, setTaskNumber] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    //console.log("Hello");
    console.log(
      taskNumber,
      taskName,
      taskDescription,
      startDate,
      endDate
      //taskStatus
    );

    Axios.post("http://localhost:3001/guide/addtask", {
      task_number: taskNumber,
      task_name: taskName,
      task_description: taskDescription,
      start_date: startDate,
      end_date: endDate,
    })
      .then((response) => {
        //console.log(response);
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "Error" });
      });
  };

  return (
    <>
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Tasks</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/guidedashboard">Home</a>
              </li>

              <li className="breadcrumb-item active">Add Tasks</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <h3>Enter Task Information</h3>
                  <br />

                  {/* Profile Edit Form */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="guide_id"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Task Number
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="teamNumber"
                          type="text"
                          className="form-control"
                          id="teamNumber"
                          defaultValue=""
                          onChange={(e) => {
                            setTaskNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="teamID"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Task Name
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="taskName"
                          type="text"
                          className="form-control"
                          id="taskname"
                          defaultValue=""
                          onChange={(e) => {
                            setTaskName(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="taskDescription"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Task description
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="taskDescription"
                          className="form-control"
                          id="taskDescription"
                          style={{ height: "100px" }}
                          defaultValue={""}
                          onChange={(e) => {
                            setTaskDescription(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="startDate"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Start Date
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="startDate"
                          type="date"
                          className="form-control"
                          id="startDate"
                          defaultValue=""
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="endDate"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        End Date
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="endDate"
                          type="date"
                          className="form-control"
                          id="endDate"
                          defaultValue=""
                          onChange={(e) => {
                            setEndDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          addTask(e);
                        }}
                      >
                        Add Task
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
