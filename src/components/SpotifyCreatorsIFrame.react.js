function LatestRelease() {
  return (
    <>
      <section className="projects-section bg-light" id="projects">
        <div className="featured-text text-center text-lg-left"
          style={{overflow:'hidden'}}>
          <iframe id="creators-embed" title="creators-embed" data-testid="embed-iframe-2"
            src="https://creators.spotify.com/pod/profile/darknwpodcast/"
            style={{position: 'relative', top: '0px'}}
            frameBorder="border: 1px solid #e5e5e5;"
            allowFullScreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
        </div>
      </section>
    </>
  );
}

export default LatestRelease;
