import React from "react";
import CardCover from "../../assets/card/cover.png";
import ProfileImage from "../../assets/card/profile.png";
import linkedin from "../../assets/home/js/linkedin.svg";
import passwordIcon from "../../assets/home/js/password.png";
const Card = () => {
  return (
    <div className="contents expanded">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main user-member justify-content-sm-between ">
              <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
                <div className="d-flex align-items-center user-member__title justify-content-center mr-sm-25">
                  <h4 className="text-capitalize fw-500 breadcrumb-title">
                    users card
                  </h4>
                  <span className="sub-title ml-sm-25 pl-sm-25">274 Users</span>
                </div>

                <form
                  action="/"
                  className="d-flex align-items-center user-member__form my-sm-0 my-2"
                >
                  <span data-feather="search"></span>
                  <input
                    className="form-control mr-sm-2 border-0 box-shadow-none"
                    type="search"
                    placeholder="Search by Name"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="action-btn">
                <a
                  href="#"
                  className="btn px-15 btn-primary"
                  data-toggle="modal"
                  data-target="#new-member"
                >
                  <i className="las la-plus fs-16"></i>Add New Member
                </a>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade new-member"
                  id="new-member"
                  role="dialog"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  radius-xl">
                      <div className="modal-header">
                        <h6
                          className="modal-title fw-500"
                          id="staticBackdropLabel"
                        >
                          Connect Linkedin Account
                        </h6>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span data-feather="x"></span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="new-member-modal">
                          <form>
                            {/* <div className="form-group mb-20">
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Duran Clayton"
                 />
               </div> */}
                            <div className="form-group mb-20">
                              <div className="category-member">
                                <select
                                  className="js-example-basic-single js-states form-control"
                                  id="category-member"
                                >
                                  <option>Country</option>
                                  <option value="JAN">Pakistan</option>
                                  <option value="FBR">India</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group mb-20">
                              <div className="category-member">
                                <select
                                  className="js-example-basic-single js-states form-control"
                                  id="category-member"
                                >
                                  <option>TimeZone</option>
                                  <option value="JAN">Pakistan</option>
                                  <option value="FBR">India</option>
                                </select>
                              </div>
                            </div>

                            {/* // login button */}
                            <div className="button-group d-flex pt-25">
                              <button
                                data-toggle="modal"
                                data-target="#new-member2"
                                className="btn btn-primary btn-default btn-squared text-capitalize"
                              >
                                Next
                              </button>

                              <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light">
                                cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal --> */}

                {/* Second Modal */}
                <div
                  className="modal fade new-member"
                  id="new-member2"
                  role="dialog"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content  radius-xl">
                      <div className="modal-header">
                        <h6
                          className="modal-title fw-500"
                          id="staticBackdropLabel"
                        >
                          Connect Linkedin Account
                        </h6>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span data-feather="x"></span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="new-member-modal">
                          <form>
                            <div class="input-list__single">
                              <div class="form-group mb-0">
                                <div class="input-container icon-left position-relative">
                                  <span class="input-icon icon-left">
                                    <img src={passwordIcon} alt="img" />
                                  </span>

                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Linkedin password"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="input-list__single">
                              <div class="form-group mb-0">
                                <div class="input-container icon-left position-relative">
                                  <span class="input-icon icon-left">
                                    <img src={linkedin} alt="img" />
                                  </span>

                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Linkedin Account Email"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* // login button */}
                            <div className="button-group d-flex pt-25">
                              <button className="btn btn-primary btn-default btn-squared text-capitalize">
                                Submit
                              </button>

                              <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Modal End */}
              </div>
            </div>
          </div>
        </div>
        <div className="user-card2">
          <div className="row">
            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cos-xl-2 col-lg-4 mb-30 col-sm-6">
              <div className="card profile-card-3">
                <div className="background-block">
                  <img
                    src={CardCover}
                    alt="profile-sample1"
                    className="background bg-opacity-success"
                  />
                </div>
                <div className="card-content mt-n25">
                  <div className="card-content__body mt-n40 pt-0">
                    <div className="profile-thumb-block position-relative d-flex justify-content-center">
                      <img
                        src={ProfileImage}
                        alt="profile-image"
                        className="profile wh-120 bg-opacity-primary"
                      />
                      <div className="card-dropdown">
                        <div className="dropdown dropleft">
                          <button
                            className="btn-link border-0 bg-transparent p-0"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span data-feather="more-horizontal"></span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              view
                            </a>
                            <a className="dropdown-item" href="#">
                              edit
                            </a>
                            <a className="dropdown-item" href="#">
                              leave
                            </a>
                            <a className="dropdown-item" href="#">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ap-nameAddress pb-3 pt-10">
                      <h6 className="ap-nameAddress__title">Duran Clayton</h6>
                      <p className="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                        UI/UX Designer
                      </p>
                    </div>
                    <div className="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap m-n1">
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2"
                      >
                        <span data-feather="message-square"></span> chat
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-20 color-gray transparent shadow2 follow"
                      >
                        view profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //pagination */}
          <div className="row">
            <div className="col-12">
              <div className="user-pagination">
                <div className="d-flex justify-content-sm-end justify-content-end mt-1 mb-30">
                  <nav className="atbd-page ">
                    <ul className="atbd-pagination d-flex">
                      <li className="atbd-pagination__item">
                        <a
                          href="#"
                          className="atbd-pagination__link pagination-control"
                        >
                          <span className="la la-angle-left"></span>
                        </a>
                        <a href="#" className="atbd-pagination__link">
                          <span className="page-number">1</span>
                        </a>
                        <a href="#" className="atbd-pagination__link active">
                          <span className="page-number">2</span>
                        </a>
                        <a href="#" className="atbd-pagination__link">
                          <span className="page-number">3</span>
                        </a>
                        <a
                          href="#"
                          className="atbd-pagination__link pagination-control"
                        >
                          <span className="page-number">...</span>
                        </a>
                        <a href="#" className="atbd-pagination__link">
                          <span className="page-number">12</span>
                        </a>
                        <a
                          href="#"
                          className="atbd-pagination__link pagination-control"
                        >
                          <span className="la la-angle-right"></span>
                        </a>
                        <a href="#" className="atbd-pagination__option"></a>
                      </li>
                      <li className="atbd-pagination__item">
                        <div className="paging-option">
                          <select name="page-number" className="page-selection">
                            <option value="20">20/page</option>
                            <option value="40">40/page</option>
                            <option value="60">60/page</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- End of Pagination--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="form-group mb-20">
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Duran Clayton"
                 />
               </div> */
}
