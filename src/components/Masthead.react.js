import {HashLink} from 'react-router-hash-link';

function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0">Dark Northwest Podcast</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Season 1 premieres September 5th.
            </h2>
            <iframe data-testid="embed-iframe"
            src="https://open.spotify.com/embed/show/76qB6wBKZL129MppCz8tZC?utm_source=generator"
            width="90%"
            height="auto"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
            <div className="mx-2">
              <HashLink className={`btn btn-${props.btnColor}`} to="#about">
                {props.buttonLabel}
              </HashLink>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
