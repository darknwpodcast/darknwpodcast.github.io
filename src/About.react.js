import { HashLink } from "react-router-hash-link";
import AllTheCircleButtons from './components/AllTheCircleButtons.react.js'
import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Countdown from "./components/Countdown.react.js";
import Signup from "./components/Signup.react";
import Contact from "./components/Contact.react.js";
import Upsell from "./components/Upsell.react";
import RssFeedFetcher from "./api/RssFeedFetcher.js";
import PNWMap from "./components/PNWMap.react.js";

function About() {
  const rss = new RssFeedFetcher();
  rss.fetchSummary();

  return (
    <>
      <Nav />
      <Masthead tab="about" buttonLabel="About Us" />
              <PNWMap />
       <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
                {/* <iframe title="s01-trailer-90-sec"
                src="https://www.youtube.com/embed/aBIK0imds_0"
                frameBorder="0"
                width="100%"
                height="400px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe> */}
              <div id="rss-summary-id" className="text-white-50" />
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="./favicon.svg"
                alt="Dark Northwest logo"
                width="80%"
              />
            </div>
            <div className="col-md-6">
              <div className="featured-text text-center text-lg-left">
                <h3>Season 1</h3>
                <p className="text-black-50 mb-0">
                  Follow a group of young friends investigating a tragedy at the haunted Old Cascade Tunnel in Wellington, WA—the site of one of the worst train disasters in U.S. history.
Dark Northwest is an audio drama horror podcast inspired by real supernatural events in the Pacific Northwest. Now streaming on all your favorite podcast platforms.
                </p>
                <br />
                <p className="text-black-50 mb-0">
                  Dark Northwest is an independently owned and produced podcast. All rights reserved.
                </p>
              <Countdown />
              <div className="text-center">
                 <div className="mx-2 my-3">
                  <HashLink className="btn btn-primary" to="/episodes#page-top">
                    See Episodes
                  </HashLink>
                </div>
                <div className="mx-2 my-3">
                  <HashLink className="btn btn-secondary" to="/cast#page-top">
                    Meet the Cast & Crew
                  </HashLink>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Upsell />
      <Signup />
      <AllTheCircleButtons />
      <Contact />
    </>
  );
}

export default About;
