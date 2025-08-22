import Countdown from "./components/Countdown.react";
import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Signup from "./components/Signup.react";
import Socials from "./components/Socials.react.js";
import Subscribe from "./components/Subscribe.react.js";
import Support from "./components/Support.react.js";
import RssFeedFetcher from "./api/RssFeedFetcher.js";

function Episodes() {
  const rss = new RssFeedFetcher();
  rss.fetchEpisodes();

  return (
    <>
      <Nav />
      <Masthead buttonLabel="See episodes" btnColor="secondary" />
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
                <Countdown />
              </div>
            </div>
                <h3 id="about">Episodes</h3>
                <div id="rss-feed-id" />
                <p className="text-black-50 mb-0">
                  See all{' '}
                  <a href="https://docs.google.com/document/d/1ADhFr18cn5tB_A-kej9Bj-ei6ODsaiKW9QRAPujqYok/edit?usp=sharing">
                    SFX attributions{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </p>
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

export default Episodes;
