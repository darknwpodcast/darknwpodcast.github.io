import { HashLink } from "react-router-hash-link";

function About() {
  return (
    <>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">About</h2>
              <p className="text-white-50">
                 Dark Northwest is a scripted audio drama podcast with a full voice cast. Each season brings a multi-episode story to life, inspired by supernatural events in the PNW. Season 1 premieres Sep 5th.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
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
                <h3>Season 1</h3>
                <p className="text-black-50 mb-0">
                  Our first season is an original story based around the 1910
                  Wellington Train Disaster, the worst rail disaster in US
                  history. The story will follow a group of young friends
                  investigating a haunting in the area and the many dangers they
                  face. Coming Fall 2025.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-2 my-3">
                  <HashLink className="btn btn-secondary" to="/cast#page-top">
                    Meet the Cast
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
