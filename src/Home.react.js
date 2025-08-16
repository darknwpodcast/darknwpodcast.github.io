import "./App.css";
import About from "./components/About.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Platforms from "./components/Platforms.react.js";
import Socials from "./components/Socials.react.js";
import Signup from "./components/Signup.react.js";
import Subscribe from "./components/Subscribe.react.js";
import Support from "./components/Support.react.js";

function Home() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Learn more" btnColor="primary" />
      <Platforms />
      <Socials />
      <About />
      <Signup />
      <Subscribe />
      <Socials />
      <Support />
    </>
  );
}

export default Home;
