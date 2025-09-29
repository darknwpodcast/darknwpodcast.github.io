import "./App.css";
import AllTheCircleButtons from "./components/AllTheCircleButtons.react.js";
import LatestRelease from "./components/LatestRelease.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Signup from "./components/Signup.react.js";
import Contact from "./components/Contact.react.js";

import * as React from "react";

function Home() {
  return (
    <>
      <Nav />
      <Masthead tab="home" buttonLabel="Learn more" />
      <AllTheCircleButtons />
      <LatestRelease />
      <Signup />
      <AllTheCircleButtons />
      <Contact />
    </>
  );
}

export default Home;
