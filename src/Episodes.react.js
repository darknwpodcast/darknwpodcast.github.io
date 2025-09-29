import AllTheCircleButtons from './components/AllTheCircleButtons.react.js';
import Countdown from "./components/Countdown.react";
import Nav from "./components/Nav.react";
import Masthead from "./components/Masthead.react";
import Signup from "./components/Signup.react";
import Contact from "./components/Contact.react.js";
import RssFeedFetcher from "./api/RssFeedFetcher.js";

function Episodes() {
  const rss = new RssFeedFetcher();
  rss.fetchEpisodes();

  return (
    <>
      <Nav />
      <Masthead buttonLabel="See episodes" />
      <section className="projects-section bg-light">
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
                <Countdown />
                <p>
                  <a href="https://creators.spotify.com/pod/profile/darknwpodcast">Platform hosting site{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </p>
                <p>
                  <a href="https://anchor.fm/s/10421aa84/podcast/rss" target="_blank" rel="noreferrer">RSS feed{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </p>
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
      <AllTheCircleButtons />
      <Contact />
    </>
  );
}

export default Episodes;
