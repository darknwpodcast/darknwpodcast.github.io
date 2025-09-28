function LatestRelease() {
  return (
    <>
      <section className="projects-section bg-light" id="projects">
        <div className="featured-text text-center text-lg-left">
          <iframe id="creators-embed" title="creators-embed" data-testid="embed-iframe-2"
            src="https://podcasters.spotify.com/pod/show/darknwpodcast/episodes&theme=0"
            frameBorder="border: 1px solid #e5e5e5;"
            allowFullScreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
      </section>
      <section className="about-section text-center text-white-50" id="about">
        <div className="mx-2 my-3">
          <h3>Premium Access</h3>
          <p>
            Sign up on Patreon for exclusive bonus content and other perks.
          </p>
          <a className="btn btn-primary" href="https://patreon.com/darknwpodcast">
            Subscribe Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <br />
        <div className="mx-2 my-3">
          <h3>Other Ways to Support</h3>
          <p>
            Not ready to make a monthly pledge? Consider a one-time donation or purchase some merch to help support the show.
          </p>
          <a className="btn btn-secondary" href="https://ko-fi.com/darknwpodcast">
            Support us <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default LatestRelease;
