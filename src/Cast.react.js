import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Signup from "./components/Signup.react";
import Socials from "./components/Socials.react.js";
import Subscribe from "./components/Subscribe.react.js";
import Bio from "./components/Bio.react.js";

function Cast() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Meet the cast" />
      <section className="projects-section bg-light" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="./bg-masthead.jpg"
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Season 1</h4>
                <p className="text-black-50 mb-0">
                  Meet the cast of Season 1. Coming Fall 2025.
                </p>
              </div>
            </div>
          </div>
          <Bio
            flavor="A"
            name="Ron Leota"
            blurb="Co-creator, writer, main cast, editor, lead audio engineer"
          />
          <Bio
            flavor="B"
            name="Kairsten Fay"
            blurb="Co-creator, lead writer, main cast, editor, webmaster"
          />
        </div>
      </section>
      <Signup />
      <Subscribe />
      <Socials />
    </>
  );
}

export default Cast;
