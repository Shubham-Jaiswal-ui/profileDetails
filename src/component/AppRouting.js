import React from "react";
import ProfileDetails from "./ProfileDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IndividualData from "./IndividualData";
const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<ProfileDetails />} />
        <Route exact path="/profileDetail/:uuid" element={<IndividualData />} />
        <Route exact path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
