import {GOOGLE_GROUPS_MAILTO} from "../Constants.js";

function Subscribe() {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container px-3 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  To sponsor ads on the show, contact us at{' '}<a href="mailto:darknorthwestpodcast@gmail.com">
                    darknorthwestpodcast@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-bell text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Newsletter</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  Stay tuned into the latest news and updates.{' '}
                  <a href={GOOGLE_GROUPS_MAILTO}>
                    Sign Up <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-brands fa-google text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">DarkNW Google Group</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  View the newsletter archive via{' '}
                  <a href="https://groups.google.com/g/darknw/">
                    Google Groups <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
