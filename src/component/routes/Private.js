import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../utility/Footer";
import Header from "../utility/Header";
import Sidebar from "../utility/Sidebar";

const Private = () => {
  let auth = localStorage.getItem("token");

  return auth ? (
    <>
      <Header />
      <main>
        {/* <Sidebar /> */}
        <div>
          <Outlet />
        </div>
        <Footer class="footer-wrapper" />
      </main>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Private;
