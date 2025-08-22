import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Signup from "./components/Signup.react";
import Socials from "./components/Socials.react.js";
import Subscribe from "./components/Subscribe.react.js";
import Support from "./components/Support.react.js";
import Bio from "./components/Bio.react.js";

const bios = require("./data/bios.json");
const cast = require("./data/cast.json");

function Cast() {
  return (
    <>
      <Nav />
      <Masthead buttonLabel="Meet the cast" btnColor="primary" />
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
                <h3 id="about">Main Cast</h3>
                <p className="text-black-50 mb-0" >
                  Meet the cast of Season 1. Coming Fall 2025.
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
          <h3>Full Cast</h3>
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            {cast.map(ep => {
              return (
                <div
                  key={`S${ep.season}E${ep.episode}`}
                  className="col-md-1 col-md-8"
                >
                  <h4>S{ep.season}E{ep.episode}</h4>
                  <ul>
                    <li>Starring:
                      <ul>
                        {Object.keys(ep.cast).map(c => {
                          return <li key={c}><b>{c}</b>: {ep.cast[c]}</li>;
                        })}
                      </ul>
                  </li>
                  <li>Written by:{' '}{ep.writer}</li>
                  <li>Directed by:{' '}{ep.director}</li>
                  <li>Music by:{' '}{ep.composer}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Signup />
      <Socials />
      <Support />
      <Subscribe />
    </>
  );
}

export default Cast;
