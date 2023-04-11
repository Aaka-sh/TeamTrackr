import React, { useState, useEffect } from "react";
import Axios from "axios";
import TaskCards from "./TaskCards";
import StudentSideBar from "./StudentSideBar";
import StudentNavBar from "./StudentNavBar";
import DiaryEntryCard from "./DiaryEntryCard";

export default function ProjectDiary() {
  const [taskNumber, setTaskNumber] = useState("");
  const [sessionNumber, setSessionNumber] = useState("");
  const [workPlanned, setWorkPlanned] = useState("");
  const [workCompleted, setWorkCompleted] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [status, setStatus] = useState("");

  const makeEntry = (event) => {
    event.preventDefault();
    //console.log("Hello");
    console.log(
      taskNumber,
      sessionNumber,
      workPlanned,
      workCompleted,
      entryDate
    );

    Axios.post("http://localhost:3001/makeentry", {
      task_number: taskNumber,
      session_number: sessionNumber,
      work_planned: workPlanned,
      work_completed: workCompleted,
      entry_date: entryDate,
    })
      .then((response) => {
        //console.log(response);
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "Error" });
      });
  };

  //getting the project entry details
  const [entryDetails, setEntryDetails] = useState([]);

  const getEntries = async () => {
    const entryResponse = await Axios.get("http://localhost:3001/getentries");
    setEntryDetails(entryResponse.data);
    console.log(entryResponse.data);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <>
      <StudentSideBar />
      <StudentNavBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Project Diary</h1>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body pt-3">
                  <h3 className="text-center">Make an entry</h3>
                  <br />

                  {/* Profile Edit Form */}
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="week_number"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Week Number
                      </label>
                      <div className="col-md-8 col-lg-3">
                        <input
                          name="weekNumber"
                          type="text"
                          className="form-control"
                          id="weekNumber"
                          defaultValue=""
                          onChange={(e) => {
                            setTaskNumber(e.target.value);
                          }}
                        />
                      </div>

                      <label
                        htmlFor="session_number"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Session Number
                      </label>
                      <div className="col-md-8 col-lg-3">
                        <input
                          name="sessionNumber"
                          type="text"
                          className="form-control"
                          id="sessionNumber"
                          defaultValue=""
                          onChange={(e) => {
                            setSessionNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="Work_Planned"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Work Planned
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="sessionDescription"
                          className="form-control"
                          id="sessionDescription"
                          style={{ height: "80px" }}
                          defaultValue={""}
                          onChange={(e) => {
                            setWorkPlanned(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="Work_Completed"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Work Completed
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="sessionDescription"
                          className="form-control"
                          id="sessionDescription"
                          style={{ height: "80px" }}
                          defaultValue={""}
                          onChange={(e) => {
                            setWorkCompleted(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="startDate"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Date
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="Date"
                          type="date"
                          className="form-control"
                          id="Date"
                          defaultValue=""
                          onChange={(e) => {
                            setEntryDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn col-lg-5 mt-3"
                        style={{ backgroundColor: "#012971", color: "white" }}
                        onClick={(e) => {
                          makeEntry(e);
                        }}
                      >
                        Make Entry
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pagetitle">
          <h1>Previous Entries </h1>
        </div>
        <div className="d-flex flex-row gap-5 flex-wrap">
          {entryDetails.map((item) => {
            return (
              <DiaryEntryCard
                username={item.username}
                tasknumber={item.task_number}
                sessionnumber={item.session_number}
                workplanned={item.work_planned}
                workcompleted={item.work_completed}
                entrydate={item.entry_date}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
