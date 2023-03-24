import React, { useState, useEffect } from "react";
import Axios from "axios";
import GuideNavBar from "./GuideNavBar";
import GuideSideBar from "./GuideSideBar";

export default function GuideUserProfile() {
  const [guideUserDetails, setGuideUserDetails] = useState([]);
  const [guideDetails, setGuideDetails] = useState([]);

  const loadData = async () => {
    const guideUserDataResponse = await Axios.get(
      "http://localhost:3001/guide/userdata"
    );
    setGuideUserDetails(guideUserDataResponse.data);
    //console.log(guideUserDetails);
  };

  const getGuideData = async () => {
    const guideDataResponse = await Axios.get(
      "http://localhost:3001/guide/data"
    );
    setGuideDetails(guideDataResponse.data);
    console.log(guideDetails);
    //console.log(guideDetails);
  };

  useEffect(() => {
    loadData();
    console.log(guideDetails);
    //
  }, []);

  useEffect(() => {
    getGuideData();
  }, []);

  const [guideName, setGuideName] = useState("");
  const [guideAbout, setGuideAbout] = useState("");
  const [guideDepartment, setGuideDepartment] = useState("");
  const [guidePhone, setGuidePhone] = useState("");
  const [guideEmail, setGuideEmail] = useState("");
  const [guideGithub, setGuideGithub] = useState("");
  const [status, setStatus] = useState("");

  const saveGuideDetails = (event) => {
    event.preventDefault();
    //console.log("Hello");
    // console.log(
    //   guideName,
    //   guideAbout,
    //   guideDepartment,
    //   guidePhone,
    //   guideEmail,
    //   guideGithub
    // );

    Axios.post("http://localhost:3001/saveGuideDetails", {
      guide_name: guideName,
      guide_about: guideAbout,
      department: guideDepartment,
      guide_phone: guidePhone,
      guide_email: guideEmail,
      guide_github: guideGithub,
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
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Users</li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src="assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />

                  {guideDetails.map((item) => {
                    return <h2>{item.Guide_Name}</h2>;
                  })}

                  <h3>
                    {guideUserDetails.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.userrole}</td>
                        </tr>
                      );
                    })}
                  </h3>
                  <div className="social-links mt-2">
                    <a href="#" className="envelope">
                      <i className="bi bi-envelope" />
                    </a>
                    <a href="#" className="github">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  {/* Bordered Tabs */}
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        {guideDetails.map((item) => {
                          return <>{item.Guide_About}</>;
                        })}
                      </p>
                      <h5 className="card-title">Profile Details</h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Guide ID</div>
                        <div className="col-lg-9 col-md-8">
                          {guideUserDetails.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.username}</td>
                              </tr>
                            );
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Full Name
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {guideDetails.map((item) => {
                            return <>{item.Guide_Name}</>;
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Department
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {guideDetails.map((item) => {
                            return <>{item.Department}</>;
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">
                          Mobile Number
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {guideDetails.map((item) => {
                            return <>{item.Guide_Phone}</>;
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">
                          {guideDetails.map((item) => {
                            return <>{item.Guide_Email}</>;
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Github</div>
                        <div className="col-lg-9 col-md-8">
                          {guideDetails.map((item) => {
                            return <>{item.Guide_Github}</>;
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      {/* Profile Edit Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="profileImage"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Profile Image
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <img
                              src="assets/img/profile-img.jpg"
                              alt="Profile"
                            />
                            <div className="pt-2">
                              <a
                                href="#"
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i className="bi bi-upload" />
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i className="bi bi-trash" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Full Name
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              defaultValue=""
                              onChange={(e) => {
                                setGuideName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            About
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              style={{ height: "100px" }}
                              defaultValue={""}
                              onChange={(e) => {
                                setGuideAbout(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="company"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Department
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              className="form-control"
                              id="company"
                              defaultValue=""
                              onChange={(e) => {
                                setGuideDepartment(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Job"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone Number
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="job"
                              type="text"
                              className="form-control"
                              id="Job"
                              defaultValue=""
                              onChange={(e) => {
                                setGuidePhone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Country"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Address
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="country"
                              type="text"
                              className="form-control"
                              id="Country"
                              defaultValue=""
                              onChange={(e) => {
                                setGuideEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Linkedin"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Github
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="linkedin"
                              type="text"
                              className="form-control"
                              id="Linkedin"
                              defaultValue=""
                              onChange={(e) => {
                                setGuideGithub(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn"
                            style={{
                              backgroundColor: "#012971",
                              color: "white",
                            }}
                            onClick={(e) => {
                              saveGuideDetails(e);
                              getGuideData();
                              //navigate("/login");
                            }}
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* End Profile Edit Form */}
                    </div>
                    <div className="tab-pane fade pt-3" id="profile-settings">
                      {/* Settings Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="changesMade"
                              >
                                Changes made to your account
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newProducts"
                              >
                                Information on new products and services
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="proOffers"
                              >
                                Marketing and promo offers
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                defaultChecked
                                disabled
                              />
                              <label
                                className="form-check-label"
                                htmlFor="securityNotify"
                              >
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* End settings Form */}
                    </div>
                    <div
                      className="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      {/* Change Password Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                      {/* End Change Password Form */}
                    </div>
                  </div>
                  {/* End Bordered Tabs */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
