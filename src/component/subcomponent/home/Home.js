import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import $ from "jquery";

const Home = () => {
  return (
    <div className="contents expanded">
      <div className="container-fluid">
        <div className="social-dash-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Social Media Dashboard
                </h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <div className="action-btn">
                    <div className="form-group mb-0">
                      <div className="input-container icon-left position-relative">
                        <span className="input-icon icon-left">
                          <FeatherIcon icon="calendar" className="nav-icon" />
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-default date-ranger"
                          name="date-ranger"
                          placeholder="Oct 30, 2019 - Nov 30, 2019"
                        />

                        <span className="input-icon icon-right">
                          <span data-feather="chevron-down"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown action-btn">
                    <button
                      className="btn btn-sm btn-default btn-white dropdown-toggle"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="la la-download"></i> Export
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                      <span className="dropdown-item">Export With</span>
                      <div className="dropdown-divider"></div>
                      <a href="" className="dropdown-item">
                        <i className="la la-print"></i> Printer
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-file-pdf"></i> PDF
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-file-text"></i> Google Sheets
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-file-excel"></i> Excel (XLSX)
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-file-csv"></i> CSV
                      </a>
                    </div>
                  </div>
                  <div className="dropdown action-btn">
                    <button
                      className="btn btn-sm btn-default btn-white dropdown-toggle"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="la la-share"></i> Share
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu3"
                    >
                      <span className="dropdown-item">Share Link</span>
                      <div className="dropdown-divider"></div>
                      <a href="" className="dropdown-item">
                        <i className="la la-facebook"></i> Facebook
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-twitter"></i> Twitter
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-google"></i> Google
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-feed"></i> Feed
                      </a>
                      <a href="" className="dropdown-item">
                        <i className="la la-instagram"></i> Instagram
                      </a>
                    </div>
                  </div>
                  <div className="action-btn">
                    <a href="" className="btn btn-sm btn-primary btn-add">
                      <i className="la la-plus"></i> Add New
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-25">
              <div className="social-overview-wrap">
                <div className="card border-0">
                  <div className="card-header">
                    <h6>Social Media Overview</h6>
                  </div>
                  <div className="card-body">
                    <ul className="social-overview">
                      <li>
                        <div className="social-box bg-facebook">
                          <span className="la la-facebook"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Likes</p>
                      </li>
                      <li>
                        <div className="social-box bg-twitter">
                          <span className="la la-twitter"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Followers</p>
                      </li>
                      <li>
                        <div className="social-box gradientInstragram">
                          <span className="la la-instagram"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Followers</p>
                      </li>
                      <li>
                        <div className="social-box bg-youtube">
                          <span className="la la-youtube"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Subscribers</p>
                      </li>
                      <li>
                        <div className="social-box bg-pinterest">
                          <span className="la la-pinterest"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Followers</p>
                      </li>
                      <li>
                        <div className="social-box bg-linkedin">
                          <span className="la la-linkedin"></span>
                        </div>
                        <h3>5,461</h3>
                        <p>Followers</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-25">
              <div className="card card-overview border-0">
                <div className="card-header">
                  <h6>Facebook Overview</h6>
                  <div className="card-extra">
                    <div className="card-tab btn-group nav nav-tabs">
                      <a
                        className="btn btn-xs btn-white active border-light"
                        id="f_today-tab"
                        data-toggle="tab"
                        href="#f_overview-today"
                        role="tab"
                        area-controls="f_overview"
                        aria-selected="true"
                      >
                        Today
                      </a>
                      <a
                        className="btn btn-xs btn-white border-light"
                        id="f_week-tab"
                        data-toggle="tab"
                        href="#f_overview-week"
                        role="tab"
                        area-controls="f_overview"
                        aria-selected="false"
                      >
                        Week
                      </a>
                      <a
                        className="btn btn-xs btn-white border-light"
                        id="f_month-tab"
                        data-toggle="tab"
                        href="#f_overview-month"
                        role="tab"
                        area-controls="f_overview"
                        aria-selected="false"
                      >
                        Month
                      </a>
                      <a
                        className="btn btn-xs btn-white border-light"
                        id="f_year-tab"
                        data-toggle="tab"
                        href="#f_overview-year"
                        role="tab"
                        area-controls="f_overview"
                        aria-selected="false"
                      >
                        Year
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pb-0">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="f_overview-today"
                      role=""
                      aria-labelledby="f_overview-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card-overview__left">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>25,845</h1>
                                    <p>Engaged Users</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>25%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartOne"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>2,534</h1>
                                    <p>Page Impressions</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>40%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartTwo"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-overview__right">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>2,142</h1>
                                    <p>Total Page Likes</p>
                                    <div>
                                      <span className="color-danger">
                                        <i data-feather="trending-down"></i>
                                        <strong>15%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartThree"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>1,132</h1>
                                    <p>New Page LIke</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>13%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartFour"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="f_overview-week"
                      role=""
                      aria-labelledby="f_overview-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card-overview__left">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>25,845</h1>
                                    <p>Engaged Users</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>25%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartFive"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>92,534</h1>
                                    <p>Page Impressions</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>26%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartSix"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-overview__right">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>9,142</h1>
                                    <p>Total Page Likes</p>
                                    <div>
                                      <span className="color-danger">
                                        <i data-feather="trending-down"></i>
                                        <strong>23%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartSeven"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>432</h1>
                                    <p>New Page LIke</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>44%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartEight"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="f_overview-month"
                      role=""
                      aria-labelledby="f_overview-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card-overview__left">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>25,845</h1>
                                    <p>Engaged Users</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>25%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartNine"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>492,534</h1>
                                    <p>Page Impressions</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>36%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartTen"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-overview__right">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>12,142</h1>
                                    <p>Total Page Likes</p>
                                    <div>
                                      <span className="color-danger">
                                        <i data-feather="trending-down"></i>
                                        <strong>13%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartEleven"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>1,432</h1>
                                    <p>New Page LIke</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>14%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartTwelve"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="f_overview-year"
                      role=""
                      aria-labelledby="f_overview-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card-overview__left">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>25,845</h1>
                                    <p>Engaged Users</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>25%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartThirteen"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 br-1">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>492,534</h1>
                                    <p>Page Impressions</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>36%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartFourteen"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-overview__right">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-6">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>12,142</h1>
                                    <p>Total Page Likes</p>
                                    <div>
                                      <span className="color-danger">
                                        <i data-feather="trending-down"></i>
                                        <strong>13%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartFifteen"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-12 col-md-6 co-last">
                                <div className="overview-single">
                                  <div className="overview-content">
                                    <h1>1,432</h1>
                                    <p>New Page LIke</p>
                                    <div>
                                      <span className="color-success">
                                        <i data-feather="trending-up"></i>
                                        <strong>14%</strong>
                                      </span>
                                      <small>20,641 (prev)</small>
                                    </div>
                                  </div>

                                  <div className="overview-single__chart">
                                    <div className="parentContainer">
                                      <div>
                                        <canvas id="lineChartSixteen"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- ends: .row --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
