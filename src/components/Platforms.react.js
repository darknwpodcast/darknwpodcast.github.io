function platforms(props) {
  let platforms;
  if (props?.platforms === undefined) {
    platforms = {
      sp: "https://open.spotify.com/show/76qB6wBKZL129MppCz8tZC",
      ap: "https://podcasts.apple.com/us/podcast/dark-northwest/id1828228648",
      am: "https://music.amazon.com/podcasts/e0389d9d-becd-45bd-b578-cee7c2f17c21/dark-northwest",
      yt: "https://www.youtube.com/@DarkNWPodcast",
    };
  } else {
    platforms = props.platforms;
  }

  return (
    <section className="contact-section bg-black">
      <h2 className="link-header text-white mb-4">Subscribe to our podcast</h2>
      <div className="social d-flex justify-content-center">
        {platforms["sp"] ? (
          <a className="mx-2" href={platforms["sp"]}>
          <i className="fa-brands fa-spotify"></i>
          </a>
        ) : null}
        {platforms["ap"] ? (
          <a className="mx-2" href={platforms["ap"]}>
            <i className="fa-brands fa-apple"></i>
          </a>
        ) : null}
        {platforms["yt"] ? (
          <a className="mx-2" href={platforms["yt"]}>
            <i className="fab fa-youtube"></i>
          </a>
        ) : null}
        {platforms["am"] ? (
          <a className="mx-2" href={platforms["am"]}>
              <i className="fa-brands fa-amazon"></i>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default platforms;
