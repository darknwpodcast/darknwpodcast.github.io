import {GOOGLE_GROUPS_MAILTO} from "../Constants.js";

function Signup() {
  return (
    <section className="signup-section" id="signup">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Stay in touch</h2>
            <form className="form-signup" id="contactForm">
              <div className="row input-group-newsletter">
                <div className="col-md-12">
                  <a
                    href={GOOGLE_GROUPS_MAILTO}
                    className="btn btn-secondary"
                  >
                    Subscribe <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
