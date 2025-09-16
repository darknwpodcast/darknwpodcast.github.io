import {HashLink} from 'react-router-hash-link';

const EPISODE_PREVIEW_URL = "https://open.spotify.com/embed/episode/3NZDG4vn4rQkvPGZe1FjwA?utm_source=generator&t=0"; // S01 trailer
const CREATORS_PLATFORM_URL = "https://creators.spotify.com/pod/profile/darknwpodcast";

function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0"><div className='wet-paint'>Dark Northwest</div>{' '}Podcast</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Season 1 now streaming on all podcast platform providers.
            </h2>
            <iframe title="spotify-trailer" data-testid="embed-iframe"
              src={EPISODE_PREVIEW_URL}
              width="90%"
              height="auto"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
              <div className="call-to-action-buttons">
                <p>
                  <HashLink className={`btn btn-primary`} to={CREATORS_PLATFORM_URL}>
                    Listen Now
                  </HashLink>
                </p>
                <p>
                <HashLink className={`btn btn-secondary`} to="#about">
                  {props.buttonLabel}
                </HashLink>
                </p>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Masthead;
