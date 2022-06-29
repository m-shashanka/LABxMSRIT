import React from "react";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import Questions from "../Data/Questions";
import { Link } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import TopBar from "../components/TopBar/TopBar";
import LeftBar from "../components/LeftBar/LeftBar";

function DSLab() {
  return (
    <>
      <Header />
      {/* <Filter /> */}
      {/* <TopBar /> */}
      <LeftBar />
    </>
  );
}

export default DSLab;