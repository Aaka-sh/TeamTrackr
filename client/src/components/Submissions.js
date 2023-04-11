import React, { useEffect, useState } from "react";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";
import SessionCard from "./SessionCard";
import Axios from "axios";
import ProjectDiaryCard from "./ProjectDiaryCard";

export default function Submissions() {
  //getting the session details for the assign session cards
  const [submissionDetails, setSubmissionDetails] = useState([]);

  const getSubmissions = async () => {
    const submissionResponse = await Axios.get(
      "http://localhost:3001/getStudentSubmissions",
      {
        params: { id: sessionStorage.getItem("StudentCardID") },
      }
    );
    if (submissionResponse.data.length > 0) {
      setSubmissionDetails(submissionResponse.data);
    } else {
      setSubmissionDetails(["No Data"]);
    }
    //console.log("Card for " + sessionStorage.getItem("StudentCardID"));
    console.log(submissionResponse.data);
  };

  useEffect(() => {
    getSubmissions();
  }, []);

  return (
    <div className="ml-5">
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Submissions </h1>
        </div>
        <div className="d-flex flex-row gap-4 flex-wrap">
          {submissionDetails.map((item) => {
            return (
              <ProjectDiaryCard
                username={item.username}
                task_number={item.task_number}
                session_number={item.session_number}
                work_planned={item.work_planned}
                work_completed={item.work_completed}
                entry_date={item.entry_date}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
