import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import AddIconUser from "../../assets/campaigns/useradd.svg";
import UserlimitIcon from "../../assets/campaigns/userlimit.svg";
import infoIcon from "../../assets/campaigns/Info.svg";
const AddNewCaigns = () => {
  const [data, setData] = useState({});
  const [creteCampaign, setCreateCampaign] = useState([
    {
      id: 1,
      timeMinites: 0,
      timeHour: 0,
      name: "Send Connection Request",
      text: "thiss is test text",
    },
  ]);
  const getId = creteCampaign[creteCampaign.length - 1].id;
  console.log(getId);

  const [timeDay, setTimeDay] = useState(0);
  const [timeHour, setTimeHour] = useState(0);
  const [text, setText] = useState("");

  function myFunction(d) {
    const boxes = document.getElementsByClassName(d);
    console.log(d);
    boxes[0].style.color = "#5f63f2";
    boxes[0].style.border = "1px solid #5f63f2";
  }
  function saveFunction() {
    setCreateCampaign([
      ...creteCampaign,
      {
        id: creteCampaign[creteCampaign.length - 1].id + 1,
        timeMinites: timeDay,
        timeHour: timeHour,
        name: data.name,
        text: text,
      },
    ]);
    console.log(creteCampaign);
  }
  function removeFunction(da) {
    const data = creteCampaign.filter((d) => d.id != da);
    setCreateCampaign(data);
  }
  return (
    <>
      <div className="contents expanded background-campaigns ">
        <div className="container-fluid  mt-3">
          <h1>Create Campaign</h1>
          <div className="row mt-3 ">
            <div className="col-lg-6 ">
              <div className="white pt-2">
                <form>
                  {/* -------- */}
                  <div className="col-md-12 mb-20 px-15">
                    <label
                      for="validationDefault01"
                      className="il-gray fs-15 fw-500 align-center"
                    >
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-light radius-xs b-light"
                      id="validationDefault01"
                      placeholder="Enter Campaign Name"
                      required=""
                    />
                  </div>
                  {/* -------- */}

                  {/* -------- */}
                  <div className=" col-md-12 mb-20  form-group select-px-15">
                    <label
                      for="countryOption"
                      className="il-gray fs-15 fw-500 align-center"
                    >
                      Campaign Type
                    </label>
                    <select className="form-control px-15" id="countryOption">
                      <option>Select Type</option>
                      <option>1</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  {/* -------- */}
                  <div className="col-md-12 mb-10 ">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="Premium"
                      />
                      <label class="custom-control-label" for="Premium">
                        LinkedIn Premium accounts only
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-10">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="tracking"
                      />
                      <label class="custom-control-label" for="tracking">
                        Enable link tracking
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-10">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="campaign"
                      />
                      <label class="custom-control-label" for="campaign">
                        Email only campaign
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-10">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="prospects"
                      />
                      <label class="custom-control-label" for="prospects">
                        Move prospects from other campaigns if they are found
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-10">
                    <div class="custom-control custom-switch switch-primary switch-md ">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="contacted"
                      />
                      <label class="custom-control-label" for="contacted">
                        Include prospects I've contacted on LinkedIn before
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="white  h-100">
                <div className="d-flex flex-wrap justify-content-between ">
                  <div className="align-self-center">Searches</div>
                  <div data-toggle="modal" data-target="#taskModal">
                    <a href="#" class="btn btn-sm btn-primary btn-add">
                      <i class="la la-plus"></i> Add Search
                    </a>
                  </div>

                  {/* -------------------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="taskModal"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-md add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">Add Search</h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="d-flex justify-content-around ">
                            <div>
                              <button className="btn btn-default btn-squared btn-outline-info ">
                                Add Url
                              </button>
                            </div>
                            <div>
                              <button className="btn btn-default btn-squared btn-outline-light text-gray">
                                Add Sales Navigator Search
                              </button>
                            </div>
                            <div>
                              <button className="btn btn-default btn-squared btn-outline-light text-gray">
                                Add LinkedIn Search
                              </button>
                            </div>
                          </div>
                          <div class="add-todo-form mt-4">
                            <form action="">
                              <div class="form-group">
                                Add url
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  name="todo-text"
                                  placeholder="Enter search link"
                                />
                              </div>
                              <div>
                                <input
                                  type="range"
                                  className="form-range w-75"
                                />
                                <span className="mx-3">
                                  <img src={UserlimitIcon} />
                                  1000
                                </span>
                              </div>
                              <div className="form-group mb-0 ">
                                <button
                                  type="submit"
                                  class="btn btn-lg btn-primary text-end"
                                >
                                  Add Search
                                </button>
                              </div>
                            </form>
                          </div>

                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {creteCampaign.map((d, s) => (
              <div className="col-lg-3 pt-2">
                <div className="white pt-2">
                  <button
                    type="button"
                    className="close px-2"
                    onClick={() => removeFunction(d.id)}
                  >
                    <span data-feather="x">x</span>
                  </button>
                  <div className="d-flex p-2">
                    <div className="circle-uni">{s + 1}</div>
                    <div className="px-2">
                      <img src={AddIconUser} />
                    </div>
                    <div className="fw-500">{d.name.slice(0, 15)} ....</div>
                  </div>
                  <div className="px-4 ">
                    {d.text ? d.text : "text content"}
                  </div>
                  <div className="color-primary px-3 pt-4">
                    Wait after previous step
                  </div>
                  <div className="px-3 fs-16 fw-500">
                    {d.timeMinites}d {d.timeHour}h
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-3 pt-2">
              <div className="border-blue  w-100">
                <button
                  class="btn btn-primary btn-default btn-squared "
                  data-toggle="modal"
                  data-target="#addStep"
                >
                  Add Step +
                </button>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-6">
              <button
                class="btn btn-light btn-default btn-squared "
                data-toggle="modal"
                data-target="#addStep"
              >
                Save As Test
              </button>
              {/* ---------add step----------- */}
              <div
                class="add-todo-modal modal fade"
                id="addStep"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                  id="add-todo"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header add-todo-header">
                      <h6 class="modal-title add-todo-title">Add Step</h6>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span data-feather="x"></span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="addstep-color p-2">
                            <div className="fs-15 font-weight-bold">
                              LinkedIn Automation
                            </div>

                            <div className="background-color-white d-flex align-items-center my-2  ">
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div
                                className="pl-4  fs-18 pointer "
                                data-toggle="modal"
                                data-target="#sendRequest"
                                data-dismiss="modal"
                                onClick={() =>
                                  setData({
                                    name: "Send Connection Request",
                                  })
                                }
                              >
                                Send Connection Request
                              </div>
                              <div className="ml-auto pr-2 ">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div
                              className="background-color-white d-flex align-items-center my-2 "
                              data-target="#SendMessage"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4  fs-18 pointer">
                                Send Message
                              </div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div
                              className="background-color-white d-flex align-items-center my-2 "
                              data-target="#SendInMail"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4  fs-18 pointer">
                                Send InMail
                              </div>
                              <div className=" ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div
                              className="background-color-white d-flex align-items-center my-2 "
                              data-target="#PerformAction"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 pointer ">
                                Perform Action
                              </div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div
                              className="background-color-white d-flex align-items-center my-2 ConnectionByEmail "
                              data-target="#ConnectionByEmail"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 pointer">
                                Send Connection by Email
                              </div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="addstep-color p-2">
                            <div className="fs-15 font-weight-bold">
                              Email Automation
                            </div>

                            <div
                              className="background-color-white d-flex align-items-center my-2  "
                              data-target="#SendEmail"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 pointer">
                                Send Email
                              </div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div className="background-color-white d-flex align-items-center my-2  ">
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 ">Enrich Profile</div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>
                          </div>

                          <div className="addstep-color p-2 mt-3">
                            <div className="fs-15 font-weight-bold">
                              Integrations
                            </div>

                            <div className="background-color-white d-flex align-items-center my-2  ">
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 ">Send Webhook</div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>

                            <div className="background-color-white d-flex align-items-center my-2  ">
                              <div className="pl-2 py-2">
                                <img src={AddIconUser} />
                              </div>
                              <div className="pl-4 fs-18 ">Enrich Profile</div>
                              <div className="ml-auto pr-2">
                                <img src={infoIcon} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ends: .add-todo-form --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* --------------------- */}
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-wrap justify-content-end">
                <div>
                  <button
                    class="btn btn-light btn-default btn-squared "
                    data-toggle="modal"
                    data-target="#sendRequest"
                  >
                    Save As Draft
                  </button>
                  {/* ---------Send Connection Request Modal----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="sendRequest"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">
                            Send Connection Request
                          </h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="custom-control custom-switch switch-primary switch-md ">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="campaigns"
                            />
                            <label class="custom-control-label" for="campaigns">
                              Include text Message
                            </label>
                          </div>
                          <div
                            for="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 text-end"
                          >
                            0/300
                          </div>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>
                          <div className="d-flex flex-wrap mt-3">
                            <div
                              className="border-text-custom firstName custom-edit m-1 px-1"
                              onClick={() => myFunction("firstName")}
                            >
                              First Name
                            </div>
                            <div
                              className="border-text-custom lastName m-1 px-1"
                              onClick={() => myFunction("lastName")}
                            >
                              Last Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Location
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Company name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              years in Company
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Career Positions Count
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Years in Career
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              College Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Occupation
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Event Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 1
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 2
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 3
                            </div>
                          </div>
                          <div className="link-color">
                            Wait after prevoius step
                          </div>
                          <div className="d-flex">
                            <div
                              className="boxer"
                              onClick={() => setTimeDay(timeDay - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeDay}d</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeDay(timeDay + 1)}
                            >
                              +
                            </div>

                            <div
                              className="ml-3 boxer"
                              onClick={() => setTimeHour(timeHour - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeHour}h</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeHour(timeHour + 1)}
                            >
                              +
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary btn-default btn-squared mx-2 d-flex align-items-end"
                              onClick={() => saveFunction()}
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}

                  {/* ---------Send Message Modal----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="SendMessage"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">
                            Send Message
                          </h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div
                            for="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 text-end"
                          >
                            0/300
                          </div>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>
                          <div className="d-flex flex-wrap mt-3">
                            <div
                              className="border-text-custom firstName custom-edit m-1 px-1"
                              onClick={() => myFunction("firstName")}
                            >
                              First Name
                            </div>
                            <div
                              className="border-text-custom lastName m-1 px-1"
                              onClick={() => myFunction("lastName")}
                            >
                              Last Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Location
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Company name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              years in Company
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Career Positions Count
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Years in Career
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              College Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Occupation
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Event Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 1
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 2
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 3
                            </div>
                          </div>
                          <div className="link-color">
                            Wait after prevoius step
                          </div>
                          <div className="d-flex">
                            <div
                              className="boxer"
                              onClick={() => setTimeDay(timeDay - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeDay}d</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeDay(timeDay + 1)}
                            >
                              +
                            </div>

                            <div
                              className="ml-3 boxer"
                              onClick={() => setTimeHour(timeHour - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeHour}h</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeHour(timeHour + 1)}
                            >
                              +
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary btn-default btn-squared mx-2 d-flex align-items-end"
                              onClick={() => saveFunction()}
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}

                  {/* ---------Send InMail Modal----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="SendInMail"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">
                            Send InMail
                          </h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x">x</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div
                            for="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 text-end"
                          >
                            0/300
                          </div>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>

                          <div className="pt-3 pl-1">
                            <label
                              for="validationDefault01"
                              className="il-gray fs-15 fw-500 align-center"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light"
                              id="validationDefault01"
                              placeholder="Enter Subject"
                              required=""
                            />
                          </div>
                          <div className="d-flex flex-wrap mt-3">
                            <div
                              className="border-text-custom firstName custom-edit m-1 px-1"
                              onClick={() => myFunction("firstName")}
                            >
                              First Name
                            </div>
                            <div
                              className="border-text-custom lastName m-1 px-1"
                              onClick={() => myFunction("lastName")}
                            >
                              Last Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Location
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Company name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              years in Company
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Career Positions Count
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Years in Career
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              College Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Occupation
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Event Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 1
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 2
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 3
                            </div>
                          </div>
                          <div className="link-color">
                            Wait after prevoius step
                          </div>
                          <div className="d-flex">
                            <div
                              className="boxer"
                              onClick={() => setTimeDay(timeDay - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeDay}d</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeDay(timeDay + 1)}
                            >
                              +
                            </div>

                            <div
                              className="ml-3 boxer"
                              onClick={() => setTimeHour(timeHour - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeHour}h</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeHour(timeHour + 1)}
                            >
                              +
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary btn-default btn-squared mx-2 d-flex align-items-end"
                              onClick={() => saveFunction()}
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}

                  {/* ---------Perform Action----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="PerformAction"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">
                            Perform Action
                          </h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div className="row">
                            <div className="col-12 col-md-12">
                              <div className="addstep-color p-2">
                                <div className="fs-15 font-weight-bold">
                                  Perform Action
                                </div>

                                <div className="background-color-white d-flex align-items-center my-2  ">
                                  <div className="pl-2 py-2">
                                    <img src={AddIconUser} />
                                  </div>
                                  <div
                                    className="pl-4  fs-18 pointer "
                                    data-dismiss="modal"
                                  >
                                    Follow
                                  </div>
                                  <div className="ml-auto pr-2 ">
                                    <img src={infoIcon} />
                                  </div>
                                </div>

                                <div
                                  className="background-color-white d-flex align-items-center my-2 "
                                  data-dismiss="modal"
                                >
                                  <div className="pl-2 py-2">
                                    <img src={AddIconUser} />
                                  </div>
                                  <div className="pl-4  fs-18 pointer">
                                    Indoor Skills
                                  </div>
                                  <div className="ml-auto pr-2">
                                    <img src={infoIcon} />
                                  </div>
                                </div>

                                <div
                                  className="background-color-white d-flex align-items-center my-2 "
                                  data-dismiss="modal"
                                >
                                  <div className="pl-2 py-2">
                                    <img src={AddIconUser} />
                                  </div>
                                  <div className="pl-4  fs-18 pointer">
                                    Like three Post
                                  </div>
                                  <div className=" ml-auto pr-2">
                                    <img src={infoIcon} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}

                  {/* ---------Send Connection By Email----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="ConnectionByEmail"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">
                            Send Connection by Email
                          </h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div
                            for="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 text-end"
                          >
                            0/300
                          </div>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>

                          <div className="pt-3 pl-1">
                            <label
                              for="validationDefault01"
                              className="il-gray fs-15 fw-500 align-center"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light"
                              id="validationDefault01"
                              placeholder="Enter Subject"
                              required=""
                            />
                          </div>
                          <div className="d-flex flex-wrap mt-3">
                            <div
                              className="border-text-custom firstName custom-edit m-1 px-1"
                              onClick={() => myFunction("firstName")}
                            >
                              First Name
                            </div>
                            <div
                              className="border-text-custom lastName m-1 px-1"
                              onClick={() => myFunction("lastName")}
                            >
                              Last Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Location
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Company name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              years in Company
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Career Positions Count
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Years in Career
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              College Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Occupation
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Event Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 1
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 2
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 3
                            </div>
                          </div>
                          <div className="link-color">
                            Wait after prevoius step
                          </div>
                          <div className="d-flex">
                            <div
                              className="boxer"
                              onClick={() => setTimeDay(timeDay - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeDay}d</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeDay(timeDay + 1)}
                            >
                              +
                            </div>

                            <div
                              className="ml-3 boxer"
                              onClick={() => setTimeHour(timeHour - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeHour}h</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeHour(timeHour + 1)}
                            >
                              +
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary btn-default btn-squared mx-2 d-flex align-items-end"
                              onClick={() => saveFunction()}
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}

                  {/* ---------SendEmail----------- */}
                  <div
                    class="add-todo-modal modal fade"
                    id="SendEmail"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg add-todo-dialog modal-dialog-centered"
                      id="add-todo"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header add-todo-header">
                          <h6 class="modal-title add-todo-title">Send Email</h6>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span data-feather="x"></span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div
                            for="exampleFormControlTextarea1"
                            className="il-gray fs-14 fw-500 text-end"
                          >
                            0/300
                          </div>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setText(e.target.value)}
                          ></textarea>

                          <div className="pt-3 pl-1">
                            <label
                              for="validationDefault01"
                              className="il-gray fs-15 fw-500 align-center"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control ih-medium ip-light radius-xs b-light"
                              id="validationDefault01"
                              placeholder="Enter Subject"
                              required=""
                            />
                          </div>
                          <div className="d-flex flex-wrap mt-3">
                            <div
                              className="border-text-custom firstName custom-edit m-1 px-1"
                              onClick={() => myFunction("firstName")}
                            >
                              First Name
                            </div>
                            <div
                              className="border-text-custom lastName m-1 px-1"
                              onClick={() => myFunction("lastName")}
                            >
                              Last Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Location
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Company name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              years in Company
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Career Positions Count
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Total Years in Career
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              College Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Occupation
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Event Name
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 1
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 2
                            </div>
                            <div className="border-text-custom m-1 px-1">
                              Custom Filed 3
                            </div>
                          </div>
                          <div className="link-color">
                            Wait after prevoius step
                          </div>
                          <div className="d-flex">
                            <div
                              className="boxer"
                              onClick={() => setTimeDay(timeDay - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeDay}d</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeDay(timeDay + 1)}
                            >
                              +
                            </div>

                            <div
                              className="ml-3 boxer"
                              onClick={() => setTimeHour(timeHour - 1)}
                            >
                              -
                            </div>
                            <div className="pl-2">{timeHour}h</div>
                            <div
                              className="ml-2 boxer"
                              onClick={() => setTimeHour(timeHour + 1)}
                            >
                              +
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary btn-default btn-squared mx-2 d-flex align-items-end"
                              onClick={() => saveFunction()}
                              data-dismiss="modal"
                            >
                              Save
                            </button>
                          </div>
                          {/* <!-- ends: .add-todo-form --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* --------------------- */}
                </div>
                <div>
                  <button class="btn btn-primary btn-default btn-squared mx-3">
                    Start Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewCaigns;
