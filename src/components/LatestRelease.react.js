function LatestRelease() {
  return (
    <>
      <section className="projects-section bg-light" id="projects">
        <div className="featured-text text-center text-lg-left"
          style={{overflow:'hidden'}}>
          <iframe id="creators-embed" title="creators-embed" data-testid="embed-iframe-2"
            src="https://podcasters.spotify.com/pod/show/darknwpodcast/episodes&theme=0"
            style={{position: 'relative', top: '-125px'}}
            frameBorder="border: 1px solid #e5e5e5;"
            allowFullScreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
      </section>
      <section className="about-section text-white-50" id="about">
      <div className="container px-lg-5">
            <div className="row gx-0 mb-lg-5 align-items-center">
              <div className="col-md-6">
              <h3>Premium Access</h3>
              <p>
                Sign up on Patreon for exclusive bonus content and other perks.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <a className="btn btn-primary" href="https://patreon.com/darknwpodcast">
                Subscribe Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="row gx-0 mb-lg-5 align-items-center">
            <div className="col-md-6">
            <h3>Other Ways to Support</h3>
            <p>
              Not ready for a monthly pledge? Consider a one-time donation or buy merch to help the show.
            </p>
            </div>
            <div className="col-md-6 text-center">
              <a className="btn btn-secondary" href="https://ko-fi.com/darknwpodcast">
                Support us <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestRelease;
