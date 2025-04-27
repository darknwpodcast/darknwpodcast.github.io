function Bio(props) {
  if (props.flavor === "A") {
    return (
      <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div className="col-lg-6">
          <img className="img-fluid" src="./demo-image-01.jpg" alt="..." />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">{props.name}</h4>
                <p className="mb-0 text-white-50">
                  {props.blurb}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gx-0 justify-content-center" id="cast">
        <div className="col-lg-6">
          <img className="img-fluid" src="./demo-image-02.jpg" alt="..." />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">{props.name}</h4>
                <p className="mb-0 text-white-50">
                  {props.blurb}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
