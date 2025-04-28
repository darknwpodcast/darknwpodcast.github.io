import {HashLink} from 'react-router-hash-link';

function Masthead(props) {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Dark Northwest Podcast</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Season 1 premieres this fall.
            </h2>
            <div className="mx-2">
              <HashLink className="btn btn-primary" to="#about">
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
