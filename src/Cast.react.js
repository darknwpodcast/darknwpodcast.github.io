import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Signup from "./components/Signup.react";
import Socials from "./components/Socials.react.js";
import Contact from "./components/Contact.react.js";
import Support from "./components/Support.react.js";
import Bio from "./components/Bio.react.js";

const bios = require("./data/bios.json");
const cast = require("./data/cast.json");
const IMDB_URL = 'https://www.imdb.com/title/tt37996049/fullcredits/';

function Cast() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Meet the cast & crew" />
      <section className="projects-section bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="./favicon.svg"
                alt="..."
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h3 id="about">Main Cast and Crew</h3>
                <p className="text-black-50 mb-0" >
                  Meet the cast and crew of Season 1.
                  See full cast and crew credits on {' '}
                  <a href={IMDB_URL} target="_blank">
                    IMDb{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {bios.map((member, idx) => {
            return (
              <Bio
                key={member.name}
                bio={member}
                flavor={idx % 2 === 0 ? "A" : "B"}
              />
            );
          })}
        </div>
      </section>
      <section className="projects-section bg-light" id="full-cast">
         <div className="container px-4 px-lg-5">
        </div>
      </section>
      <Signup />
      <div className="contact-section-container bg-black">
        <Socials />
        <Support />
      </div>
      <Contact />
    </>
  );
}

export default Cast;
