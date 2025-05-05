function Subscribe() {
  return (
    <section className="contact-section bg-black">
      <div className="container px-3 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-bell text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Newsletter</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <a href="mailto:darknw+subscribe@googlegroups.com">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-brands fa-google text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Google Groups</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <a href="https://groups.google.com/g/darknw/">
                    View our newsletter via Google Groups
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <a href="mailto:darknorthwestpodcast@gmail.com">
                    darknorthwestpodcast@gmail.com
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
