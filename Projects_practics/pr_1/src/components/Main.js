import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./subComponents/Banner";
import Service from "./subComponents/Service";
import Doctor from "./subComponents/Doctor";
import Safty from "./subComponents/Safty";
import Blog from "./subComponents/Blog";
import Aboute from "./subComponents/Aboute";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/service" element={<Service />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/safty" element={<Safty />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default Main;
