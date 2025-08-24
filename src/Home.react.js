import "./App.css";
import About from "./components/About.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Platforms from "./components/Platforms.react.js";
import Socials from "./components/Socials.react.js";
import Signup from "./components/Signup.react.js";
import Subscribe from "./components/Subscribe.react.js";
import Support from "./components/Support.react.js";

import * as React from "react";

function Home() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Learn more" />
      <Platforms />
      <Socials />
      <About />
      <Signup />
      <Socials />
      <Support />
      <Subscribe />
    </>
  );
}

export default Home;
