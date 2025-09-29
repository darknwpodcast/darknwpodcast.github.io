function platforms(props) {
  let platforms;
  if (props?.platforms === undefined) {
    platforms = {
      patreon: "https://www.patreon.com/DarkNWPodcast",
      kofi: "https://ko-fi.com/darknwpodcast",
    };
  } else {
    platforms = props.platforms;
  }

  return (
    <section className="contact-section bg-black">
      <h2 className="link-header text-white mb-4">Help support our work</h2>
      <div className="social d-flex flex-wrap gx-10 justify-content-center">
        {platforms["patreon"] ? (
          <a className="mx-2" href={platforms["patreon"]}>
            <i className="fa-brands fa-patreon"></i>
          </a>
        ) : null}
        {platforms["kofi"] ? (
          <a className="mx-2" href={platforms["kofi"]}>
            <i className="fa-solid fa-mug-saucer"></i>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default platforms;
