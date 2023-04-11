import React from "react";

export default function NameCard(props) {
  //console.log(props);
  return (
    <div className="card col-lg-3">
      <div className="card-body">
        <p className="pt-5">Roll No: {props.student_id}</p>
        <p>Name: {props.student_name}</p>
        <div className="text-center">
          <a
            href="/evaluatestudent"
            className="btn w-100 mt-3"
            style={{ backgroundColor: "#012970", color: "white" }}
            onClick={() => {
              sessionStorage.setItem("StudentCardID", props.student_id);
            }}
          >
            Evaluate
          </a>
        </div>
      </div>
    </div>
  );
}
