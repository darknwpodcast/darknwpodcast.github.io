function Upsell() {
    return (
        <section className="about-section text-white-50" id="about">
          <div className="container px-lg-5">
            <div className="row gx-0 mb-lg-5 align-items-center">
              <div className="col-md-6">
              <h3>Premium Access</h3>
              <p>
                Sign up on Patreon for exclusive bonus content and other perks for as little as $1/month.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <a className="btn btn-primary" href="https://patreon.com/darknwpodcast">
                Subscribe <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="row gx-0 mb-lg-5 align-items-center">
            <div className="col-md-6">
            <h3>Other Ways to Support</h3>
            <p>
              Not ready for a monthly pledge? Consider a one-time donation or buy merch to help the show.
            </p>
            </div>
            <div className="col-md-6 text-center">
              <a className="btn btn-secondary" href="https://ko-fi.com/darknwpodcast">
                Support us <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Upsell;
