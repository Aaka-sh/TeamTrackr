import React from "react";

export default function ProjectDiaryCard(props) {
  //console.log(props);
  return (
    <div className="card col-lg-5">
      <div className="card-body">
        <h5 className="card-title">Task Number: {props.task_number}</h5>

        <p className="card-text">
          <b>Session Number:</b> {props.session_number}
        </p>

        <p className="card-text">
          <b>Work Planned:</b> {props.work_planned}
        </p>

        <p className="card-text">
          <b>Work Completed:</b> {props.work_completed}
        </p>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row"> Date</th>
              <td>{props.entry_date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
