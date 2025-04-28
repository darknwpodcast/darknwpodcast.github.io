import "./App.css";
import About from "./components/About.react.js";
import Nav from "./components/Nav.react.js";
import Masthead from "./components/Masthead.react.js";
import Socials from "./components/Socials.react.js";
import Signup from "./components/Signup.react.js";
import Subscribe from "./components/Subscribe.react.js";

function Home() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Learn more" btnColor="primary" />
      <Socials />
      <About />
      <Signup />
      <Subscribe />
      <Socials />
    </>
  );
}

export default Home;
