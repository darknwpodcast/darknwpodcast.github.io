function Socials(props) {
  let socials;
  if (props?.socials === undefined) {
    socials = {
      fb: "https://facebook.com/DarkNWPodcast",
      ig: "https://www.instagram.com/darknwpodcast/",
      tiktok: "https://www.tiktok.com/@darknwpodcast",
      bluesky: "https://bsky.app/profile/darknwpodcast.bsky.social",
      threads: "https://www.threads.com/@darknwpodcast",
      youtube: "https://www.youtube.com/@DarkNWPodcast",
    };
  } else {
    socials = props.socials;
  }

  return (
    <section className="contact-section bg-black">
      {props.showHeader === false ? null : <h2 className="link-header text-white mb-4">Follow us on social media</h2>}
      <div className="social d-flex justify-content-center">
        {socials["website"] ? (
          <a className="mx-2" href={socials["website"]} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-globe"></i>
          </a>
        ) : null}
        {socials["tiktok"] ? (
          <a className="mx-2" href={socials["tiktok"]} target="_blank" rel="noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        ) : null}
        {socials["ig"] ? (
          <a className="mx-2" href={socials["ig"]} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        ) : null}
        {socials["fb"] ? (
          <a className="mx-2" href={socials["fb"]} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        ) : null}
        {socials["youtube"] ? (
          <a className="mx-2" href={socials["youtube"]} target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        ) : null}
        {socials["bluesky"] ? (
          <a className="mx-2" href={socials["bluesky"]} target="_blank" rel="noreferrer">
            <i className="fab fa-bluesky"></i>
          </a>
        ) : null}
        {socials["medium"] ? (
          <a className="mx-2" href={socials["medium"]} target="_blank" rel="noreferrer">
            <i className="fab fa-medium"></i>
          </a>
        ) : null}
        {socials["threads"] ? (
          <a className="mx-2" href={socials["threads"]} target="_blank" rel="noreferrer">
            <i className="fab fa-threads"></i>
          </a>
        ) : null}
        {socials["email"] ? (
          <a className="mx-2" href={socials["email"]}>
            <i className="fa-solid fa-envelope"></i>
          </a>
        ) : null}
        {socials["imdb"] ? (
          <a className="mx-2" href={socials["imdb"]} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-imdb"></i>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default Socials;
