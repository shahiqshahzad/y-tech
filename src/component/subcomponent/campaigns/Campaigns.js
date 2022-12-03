import React, { useState } from "react";
import EditIcon from "../../assets/campaigns/edit.svg";
import ArrowupIcon from "../../assets/campaigns/arrowup.svg";
import barIcon from "../../assets/campaigns/bar.svg";
import { Collapse, ProgressBar } from "react-bootstrap";
const Campaigns = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <div className="contents expanded background-campaigns ">
      <div className="container-fluid  mt-3">
        <div className="d-flex flex-wrap m-3 justify-content-between">
          <div className="d-flex flex-wrap ">
            <div className="border-button px-2 ">My Compaigns</div>
            <div className="border-button px-2 ml-2">All Compaigns</div>
          </div>
          <div class="action-btn mt-2">
            <a href="" class="btn btn-sm btn-primary btn-add">
              <i class="la la-plus"></i> Add New
            </a>
          </div>
        </div>

        {/* /////////////////////////////////////////////// */}
        <div className="row white mt-2 justify-content-between">
          <div className="col-6 col-sm-3">
            <div className="d-flex  align-items-center  ">
              <div>
                <div className="d-flex align-items-center">
                  <div class="custom-control custom-switch switch-primary switch-md ">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="switch-s1"
                    />
                    <label class="custom-control-label" for="switch-s1"></label>
                  </div>

                  <div className="mx-3 mt-2">
                    <div>
                      <h3>Campaigns Title</h3>
                    </div>
                    <div className="d-flex justify-content-between fs-12">
                      <div>
                        <a href="/">0% complete </a>
                      </div>
                      <div className="pl-1 "> -2 hours ago </div>
                      <p> -3 steps </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="col-6 col-sm-2  align-self-center">
            <div className="d-flex justify-content-around align-item-center">
              <div
                className="right-rectangle p-3"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <img src={ArrowupIcon} />
              </div>
              <div className="right-rectangle p-3">
                <img src={EditIcon} />
              </div>
              <div className="right-rectangle p-3">
                <img src={barIcon} />
              </div>
            </div>

            {/* ======= */}
          </div>
          <Collapse in={open}>
            <div className="col-12 pt-3" id="example-collapse-text">
              <div className="row">
                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-6 d-flex flex-wrap justify-content-between">
                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>New</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Contacted</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Connected</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Replied</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Lead</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Customer</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Not Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          {/* ============== */}
        </div>

        {/* /////////////////////////////////////////////// */}
        <div className="row white mt-2 justify-content-between">
          <div className="col-6 col-sm-3">
            <div className="d-flex  align-items-center ">
              <div>
                <div className="d-flex align-items-center">
                  <div class="custom-control custom-switch switch-primary switch-md ">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="switch-s1"
                    />
                    <label class="custom-control-label" for="switch-s1"></label>
                  </div>

                  <div className="mx-3 mt-2">
                    <div>
                      <h3>Campaigns Title</h3>
                    </div>
                    <div className="d-flex justify-content-between fs-12">
                      <div>
                        <a href="/">0% complete </a>
                      </div>
                      <div className="pl-1 "> -2 hours ago </div>
                      <p> -3 steps </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="col-6 col-sm-2  align-self-center">
            <div className="d-flex justify-content-around align-item-center">
              <div
                className="right-rectangle p-3"
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <img src={ArrowupIcon} />
              </div>
              <div className="right-rectangle p-3">
                <img src={EditIcon} />
              </div>
              <div className="right-rectangle p-3">
                <img src={barIcon} />
              </div>
            </div>

            {/* ======= */}
          </div>
          <Collapse in={open1}>
            <div className="col-12 pt-3" id="example-collapse-text">
              <div className="row">
                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-2">
                  <div className="fs-14">
                    50%
                    <ProgressBar now={60} style={{ width: "80%" }} />
                    <h6 className="mt-2 ">Accepted</h6>
                    <div className="d-flex">
                      <div className="">Request Send:</div>
                      <div className="pl-3">0</div>
                    </div>
                    <div className="d-flex">
                      <div className="">Accepted request:</div>
                      <div className="pl-3">0</div>
                    </div>
                  </div>
                </div>

                <div className="col-6 d-flex flex-wrap justify-content-between">
                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>New</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Contacted</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Connected</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Replied</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Lead</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Customer</div>
                  </div>

                  <div className="text-responsive">
                    <div className="text-center "> 0</div>
                    <div>Not Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
          {/* ============== */}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
