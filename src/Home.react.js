import "./App.css";
import LatestRelease from "./components/LatestRelease.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Platforms from "./components/Platforms.react.js";
import Socials from "./components/Socials.react.js";
import Signup from "./components/Signup.react.js";
import Contact from "./components/Contact.react.js";
import Support from "./components/Support.react.js";

import * as React from "react";

function Home() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Learn more" />
      <div className="contact-section-container bg-black">
        <Platforms />
        <Socials />
        <Support />
      </div>
      <LatestRelease />
      <Signup />
      <div className="contact-section-container bg-black">
        <Socials />
        <Support />
      </div>
      <Contact />
    </>
  );
}

export default Home;
