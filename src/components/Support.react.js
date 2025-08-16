function platforms(props) {
  let platforms;
  if (props?.platforms === undefined) {
    platforms = {
      patreon: "https://www.patreon.com/DarkNWPodcast",
    };
  } else {
    platforms = props.platforms;
  }

  return (
    <section className="contact-section bg-black">
      <h2 className="link-header text-white mb-4">Help support our work</h2>
      <div className="social d-flex justify-content-center">
        {platforms["patreon"] ? (
          <a className="mx-2" href={platforms["patreon"]}>
            <i className="fa-brands fa-patreon"></i>
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default platforms;
