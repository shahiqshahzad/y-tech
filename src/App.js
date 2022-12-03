import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/subcomponent/auth/Login";
import Signup from "./component/subcomponent/auth/Signup";
import Public from "./component/routes/Public";
import Home from "./component/subcomponent/home/Home";
import Private from "./component/routes/Private";
import $ from "jquery";
import { useEffect, useState } from "react";
import Card from "./component/subcomponent/home/Card";
import Campaigns from "./component/subcomponent/campaigns/Campaigns";
import AddNewCaigns from "./component/subcomponent/campaigns/AddNewCaigns";
import Account from "./component/subcomponent/account/Account";
import Email from "./component/subcomponent/email/Email";
function App() {
  const [reload, setReload] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Public />}>
            <Route path="" element={<Login />} />
          </Route>
          
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/home" element={<Private />}>
            <Route path="" element={<Home />}></Route>
          </Route>
          <Route path="/" element={<Private />}>
            <Route path="" element={<Card />}></Route>
          </Route>

          <Route path="/campaigns" element={<Private />}>
            <Route path="" element={<Campaigns />}></Route>
          </Route>

          <Route path="/addCampaigns" element={<Private />}>
            <Route path="" element={<AddNewCaigns />}></Route>
          </Route>

          <Route path="/account" element={<Private />}>
            <Route path="" element={<Account />}></Route>
          </Route>

          <Route path="/email" element={<Private />}>
            <Route path="" element={<Email />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
