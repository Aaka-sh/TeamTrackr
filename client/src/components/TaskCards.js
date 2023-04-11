import React from "react";

export default function TaskCards(props) {
  return (
    <div className="card col-lg-5">
      <div className="card-body">
        <h5 className="card-title">
          Task Number: {props.task_number} - {props.task_name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Guide ID: {props.guide_id}
        </h6>
        <p className="card-text">
          <b>Description:</b> {props.task_description}
        </p>
        <b>
          <p>Dates:</p>
        </b>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Start Date</th>
              <td>{props.start_date}</td>
            </tr>
            <tr>
              <th scope="row">End Date</th>
              <td>{props.end_date}</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center">
          <a
            href="/viewsession"
            className="btn w-100"
            style={{ backgroundColor: "#012970", color: "white" }}
            onClick={() => {
              sessionStorage.setItem("StudentWeekNumber", props.task_number);
            }}
          >
            View Session
          </a>
        </div>
      </div>
    </div>
  );
}
