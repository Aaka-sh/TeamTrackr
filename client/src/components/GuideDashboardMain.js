import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function GuideDashboardMain() {
  const [teamDetails, setTeamDetails] = useState([]);

  const getTeams = async () => {
    const teamResponse = await Axios.get("http://localhost:3001/getTeams");
    setTeamDetails(teamResponse.data);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Guide Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}
      <section className="section dashboard">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-12">
            <div className="row">
              {/* Recent Sales */}
              <div className="col-12">
                <div className="card recent-sales overflow-auto">
                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Teams</h5>
                    <table className="table table-borderless datatable">
                      <thead>
                        <tr>
                          <th scope="col">Guide ID</th>
                          <th scope="col">Team ID</th>
                          <th scope="col">Project Name</th>
                          <th scope="col">Project Description</th>
                          <th scope="col">Member 1</th>
                          <th scope="col">Member 2</th>
                          <th scope="col">Member 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {teamDetails.map((item) => {
                            return <td>{item.Guide_ID}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Team_ID}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Project_name}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Project_Description}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Member1}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Member2}</td>;
                          })}
                          {teamDetails.map((item) => {
                            return <td>{item.Member3}</td>;
                          })}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End Recent Sales */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
