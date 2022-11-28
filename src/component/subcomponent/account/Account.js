import React from "react";
import headerProfile from "../../assets/header/author-nav.jpg";
import profileImage from "../../assets/account/profile.png";
import { Link } from "react-router-dom";
import lockIcon from "../../assets/account/lock.svg";
import editIcon from "../../assets/account/edit.svg";
import deleteIcon from "../../assets/account/trash.svg";
import { Slider } from "antd";
const Account = () => {
  return (
    <div>
      <div className="contents expanded background-campaigns ">
        <div className="container-fluid  mt-3">
          <div className="row ">
            <div className="col-12 col-md-6 ">
              <div className="white p-4">
                <div className="white  d-flex">
                  <div class="dropdown dropdown-btn dropdown-hover">
                    <div>
                      <div>
                        <img src={profileImage} width="50px" />
                      </div>
                    </div>

                    <div class="dropdown-default dropdown-bottomLeft">
                      <a class="dropdown-item" href="#">
                        Item One
                      </a>
                      <a class="dropdown-item" href="#">
                        Item Two
                      </a>
                      <a class="dropdown-item" href="#">
                        Item Three
                      </a>
                    </div>
                  </div>
                  <div className="pl-3">
                    <div className="account-color">millie.bob@gmail.com</div>
                    <Link style={{ display: "block" }}>
                      Connected to LinkedIn
                    </Link>
                  </div>
                </div>

                <hr />
                {/* -----status section */}
                <div>
                  <Link> Status</Link>
                  <div class="custom-control custom-switch switch-primary switch-md mt-1 ">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Premium"
                    />
                    <label class="custom-control-label ms-2" for="Premium">
                      Account is active
                    </label>
                  </div>
                  <hr />
                </div>
                {/* -------Accound data section */}
                <div>
                  <Link to="/">Accound Data</Link>
                  <div className="d-flex mt-2">
                    <div className="border-lock">
                      <img src={lockIcon} />
                    </div>
                    <div className="pl-2 color-black">Password is correct</div>
                  </div>

                  <div className="d-flex mt-3 ">
                    <div className="border-edit">
                      <img src={editIcon} />
                    </div>
                    <div className="pl-2 color-purple">
                      Update linkedIn account password
                    </div>
                  </div>

                  <div className="d-flex mt-3 ">
                    <div className="border-trash">
                      <img src={deleteIcon} />
                    </div>
                    <div className="pl-2 color-trash">Delete account</div>
                  </div>
                  <hr />
                  {/* ---------Inboc sync Interval */}
                  <div>
                    <div>
                      <Link to="/">Inbox Sync Interval</Link>
                    </div>
                    <div>
                      <form>
                        <div>
                          <div className="d-flex justify-content-between color-black">
                            <label>LinkedIn Inbox Sync Interval</label>
                            <label className="ml-auto">0 h 20 min</label>
                          </div>

                          <Slider range min={0} max={15} defaultValue={[0]} />
                        </div>

                        <div>
                          <div className="d-flex justify-content-between color-black">
                            <label>LinkedIn Inbox Sync Interval</label>
                            <label className="ml-auto">0 h 20 min</label>
                          </div>
                          <Slider range min={0} max={15} defaultValue={[0]} />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="white mt-3 p-4 mb-3">
                <div>
                  <Link to="/" className="pl-1">
                    {" "}
                    Account Limits
                  </Link>
                  <input
                    class="form-control form-control-lg mt-2"
                    type="text"
                    name="username"
                    placeholder="Australia"
                  ></input>
                </div>

                <div className="mt-3">
                  <Link to="/" className="pl-1">
                    Time Zone
                  </Link>
                  <div class="form-group">
                    <select
                      class="form-control px-15 select2-hidden-accessible"
                      id="exampleFormControlSelect1"
                      data-select2-id="exampleFormControlSelect1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="2">1</option>
                      <option data-select2-id="39">2</option>
                      <option data-select2-id="40">3</option>
                      <option data-select2-id="41">4</option>
                      <option data-select2-id="42">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="white mx-2 p-4">
                <div>
                  <Link> Account Limits</Link>
                  <div class="custom-control custom-switch switch-primary switch-md mt-1 ">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Premium1"
                    />
                    <label class="custom-control-label ms-2" for="Premium1">
                      Run in weekend
                    </label>
                  </div>
                </div>
                {/* on off */}
                <div>
                  <Link> Status</Link>
                  <div class="custom-control custom-switch switch-primary switch-md mt-1 ">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Premium3"
                    />
                    <label class="custom-control-label ms-2" for="Premium3">
                      Run in weekend
                    </label>
                  </div>
                </div>

                {/* ----------end on off */}

                {/* sliders */}
                <div>
                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Views of Profiles per day</div>
                      <div>10-15</div>
                    </div>
                    <Slider range min={0} max={15} defaultValue={[0, 5]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Connections by email Per Day</div>
                      <div>40-50</div>
                    </div>
                    <Slider range min={0} max={50} defaultValue={[0, 20]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Connection Requests Per Day</div>
                      <div>40-50</div>
                    </div>
                    <Slider range min={0} max={15} defaultValue={[4, 6]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Message Per day</div>
                      <div>40-50</div>
                    </div>
                    <Slider range min={0} max={50} defaultValue={[14, 16]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>InMails per day</div>
                      <div>10-15</div>
                    </div>
                    <Slider range min={0} max={15} defaultValue={[5, 10]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Searches Per Day</div>
                      <div>40-50</div>
                    </div>
                    <Slider range min={0} max={50} defaultValue={[14, 16]} />
                  </div>
                  {/* ------------end slider profile */}

                  {/* // slider view profile */}
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>Emails per day</div>
                      <div>10-15</div>
                    </div>
                    <Slider range min={0} max={50} defaultValue={[14, 46]} />
                  </div>
                  {/* ------------end slider profile */}
                </div>
                {/* ---sliders end */}
                <hr />
                {/* ///--- for premium */}
                <div>
                  <Link to="/">For LinkedIn Premium accounts only</Link>
                  <div>
                    <div className="d-flex justify-content-between mt-4 color-black">
                      <div>InMail credits per month</div>
                      <div>0</div>
                    </div>
                    <Slider range min={0} max={15} defaultValue={[0]} />
                  </div>
                </div>

                {/* end premium */}

                <div className="premium-text">
                  <div>Inmail credits left: 0</div>
                  <div>Inmail credits used this month: 0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
