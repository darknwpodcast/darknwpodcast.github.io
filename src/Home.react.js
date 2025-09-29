import "./App.css";
import AllTheCircleButtons from "./components/AllTheCircleButtons.react.js";
import SpotifyCreatorsIFrame from "./components/SpotifyCreatorsIFrame.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Signup from "./components/Signup.react.js";
import Contact from "./components/Contact.react.js";
import Upsell from "./components/Upsell.react.js";

import * as React from "react";

function Home() {
  return (
    <>
      <Nav />
      <Masthead tab="home" buttonLabel="Learn more" />
      <AllTheCircleButtons />
      <SpotifyCreatorsIFrame />
      <Upsell />
      <Signup />
      <AllTheCircleButtons />
      <Contact />
    </>
  );
}

export default Home;
