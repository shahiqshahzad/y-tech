import React from "react";
import signupTopImage from "../../assets/login/signupTop.svg";
import signupBottom from "../../assets/login/signupBottom.svg";
import signupIllustration from "../../assets/login/signupIllustration.svg";
const Login = () => {
  return (
    <>
      <div className="signUP-admin">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-5 p-0">
              <div className="signUP-admin-left signIn-admin-left position-relative">
                <div className="signUP-overlay">
                  <img
                    className="svg signupTop"
                    src={signupTopImage}
                    alt="img"
                  />
                  <img
                    className="svg signupBottom"
                    src={signupBottom}
                    alt="img"
                  />
                </div>
                <div className="signUP-admin-left__content">
                  <div className="text-capitalize mb-md-30 mb-15 d-flex align-items-center justify-content-md-start justify-content-center">
                    <a
                      className="wh-36 bg-primary text-white radius-md mr-10 content-center"
                      href="index.html"
                    >
                      A
                    </a>
                    <span className="text-dark">admin</span>
                  </div>
                  <h1>Y-tech labs</h1>
                </div>
                {/* <!-- End: .signUP-admin-left__content  --> */}
                <div className="signUP-admin-left__img">
                  <img
                    className="img-fluid svg"
                    src={signupIllustration}
                    alt="img"
                  />
                </div>
                {/* <!-- End: .signUP-admin-left__img  --> */}
              </div>
              {/* <!-- End: .signUP-admin-left  --> */}
            </div>
            {/* <!-- End: .col-xl-4  --> */}
            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-8">
              <div className="signUp-admin-right signIn-admin-right  p-md-40 p-10">
                <div className="signUp-topbar d-flex align-items-center justify-content-md-end justify-content-center mt-md-0 mb-md-0 mt-20 mb-1">
                  <p className="mb-0">
                    Don't have an account?
                    <a href="sign-up.html" className="color-primary">
                      Sign up
                    </a>
                  </p>
                </div>
                {/* <!-- End: .signUp-topbar  --> */}
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-12">
                    <div className="edit-profile mt-md-25 mt-0">
                      <div className="card border-0">
                        <div className="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                          <div className="edit-profile__title">
                            <h6>
                              Login up to{" "}
                              <span className="color-primary">Admin</span>
                            </h6>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="edit-profile__body">
                            <div className="form-group mb-20">
                              <label for="username">
                                Username or Email Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Username"
                              />
                            </div>
                            <div className="form-group mb-15">
                              <label for="password-field">password</label>
                              <div className="position-relative">
                                <input
                                  id="password-field"
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  value="secret"
                                />
                                <div className="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></div>
                              </div>
                            </div>
                            <div className="signUp-condition signIn-condition">
                              <div className="checkbox-theme-default custom-checkbox ">
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                  id="check-1"
                                />

                                <label for="check-1">
                                  <span className="checkbox-text">
                                    Keep me logged in
                                  </span>
                                </label>
                              </div>
                              <a href="forget-password.html">forget password</a>
                            </div>
                            <div className="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                              <button className="btn btn-primary btn-default btn-squared mr-15 text-capitalize lh-normal px-50 py-15 signIn-createBtn ">
                                sign in
                              </button>
                            </div>
                            <p className="social-connector text-center mb-sm-25 mb-15  mt-sm-30 mt-20">
                              <span>Or</span>
                            </p>
                            {/* ----- login with social media */}
                            {/* <div className="button-group d-flex align-items-center justify-content-md-start justify-content-center">
                              <ul className="signUp-socialBtn">
                                <li>
                                  <button className="btn text-dark px-30">
                                    <img
                                      className="svg"
                                      src="img/svg/google.svg"
                                      alt="img"
                                    />{" "}
                                    Sign up with Google
                                  </button>
                                </li>
                                <li>
                                  <button className=" radius-md wh-48 content-center">
                                    <img
                                      className="svg"
                                      src="img/svg/facebook.svg"
                                      alt="img"
                                    />
                                  </button>
                                </li>
                                <li>
                                  <button className="radius-md wh-48 content-center">
                                    <img
                                      className="svg"
                                      src="img/svg/twitter.svg"
                                      alt="img"
                                    />
                                  </button>
                                </li>
                              </ul>
                            </div> */}
                            {/* =--------------------------- */}
                          </div>
                        </div>
                        {/*  <!-- End: .card-body --> */}
                      </div>{" "}
                      {/* <!-- End: .card --> */}
                    </div>{" "}
                    {/*<!-- End: .edit-profile --> */}
                  </div>{" "}
                  {/*<!-- End: .col-xl-5 --> */}
                </div>
              </div>{" "}
              {/*<!-- End: .signUp-admin-right  -->*/}
            </div>{" "}
            {/*<!-- End: .col-xl-8  -->*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
