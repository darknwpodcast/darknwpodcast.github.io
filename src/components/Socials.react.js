function Socials(props) {
  let socials;
  if (props?.socials === undefined) {
    socials = {
      fb: "https://facebook.com/DarkNWPodcast",
      tiktok: "https://www.tiktok.com/@darknwpodcast",
      youtube: "https://www.youtube.com/@DarkNWPodcast",
      bluesky: "https://bsky.app/profile/darknwpodcast.bsky.social",
      threads: "https://www.threads.com/@darknwpodcast",
    };
  } else {
    socials = props.socials;
  }

  return (
    <section className="contact-section bg-black">
      <div className="social d-flex justify-content-center">
        {socials["fb"] ? (
          <a className="mx-2" href={socials["fb"]}>
            <i className="fab fa-facebook-f"></i>
          </a>
        ) : null}
        {socials["tiktok"] ? (
          <a className="mx-2" href={socials["tiktok"]}>
            <i className="fab fa-tiktok"></i>
          </a>
        ) : null}
        {socials["youtube"] ? (
          <a className="mx-2" href={socials["youtube"]}>
            <i className="fab fa-youtube"></i>
          </a>
        ) : null}
        {socials["bluesky"] ? (
          <a className="mx-2" href={socials["bluesky"]}>
            <i className="fab fa-bluesky"></i>
          </a>
        ) : null}
        {socials["medium"] ? (
          <a className="mx-2" href={socials["medium"]}>
            <i className="fab fa-medium"></i>
          </a>
        ) : null}
        {socials["threads"] ? (
          <a className="mx-2" href={socials["threads"]}>
            <i className="fab fa-threads"></i>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default Socials;
