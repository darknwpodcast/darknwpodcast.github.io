import {HashLink} from 'react-router-hash-link';

const EPISODE_PREVIEW_URL = "https://open.spotify.com/embed/episode/3NZDG4vn4rQkvPGZe1FjwA?utm_source=generator&t=0&theme=0"; // S01 trailer
const CREATORS_PLATFORM_URL = "https://creators.spotify.com/pod/profile/darknwpodcast";

const pageThemes = {
  home: {
    label: "Season 1 now streaming on all podcast platform providers",
    icon: "fa-solid fa-house-chimney",
    accentClass: "masthead-home",
    tagline: "An Audio Drama Horror Podcast",
  },
  about: {
    label: "About Us",
    icon: "fa-solid fa-ghost",
    accentClass: "masthead-about",
    tagline: "The Story Behind the Story",
  },
  episodes: {
    label: "Episode Data, RSS Feed & More",
    icon: "fa-solid fa-headphones",
    accentClass: "masthead-episodes",
    tagline: "Dive Into the Darkness",
  },
  cast: {
    label: "Meet the Voice Actors and Behind the Scenes Crew",
    icon: "fa-solid fa-users",
    accentClass: "masthead-cast",
    tagline: "The Voices of Dark Northwest",
  },
};

function Masthead(props) {
  const theme = pageThemes[props.tab] || pageThemes.home;

  return (
    <header className={`masthead ${theme.accentClass}`}>
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <div className="masthead-icon-wrapper">
              <i className={`${theme.icon} masthead-page-icon`}></i>
            </div>
            <h1 className="mx-auto my-0"><div className='wet-paint'>Dark Northwest</div>{' '}Podcast</h1>
            <p className="masthead-tagline">{theme.tagline}</p>
            <h2 className="text-white-50 mx-auto mt-2 mb-4">
              {theme.label}
            </h2>
            <div className="masthead-divider"></div>
            <iframe id="trailer" title="spotify-trailer" data-testid="embed-iframe"
              src={EPISODE_PREVIEW_URL}
              frameBorder="0"
              allowFullScreen=""
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
              <div className="call-to-action-buttons">
                <p>
                  <HashLink className={`btn btn-primary`} to={CREATORS_PLATFORM_URL}>
                    Listen Now <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
