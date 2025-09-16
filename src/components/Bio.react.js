import Socials from "./Socials.react.js";
const castPhotos = require.context("../img", true);

function Bio(props) {
  const member = props.bio;
  const photo = castPhotos(member.photo);

  const content = (
    <>
      <h4 className="text-white">{member.name}</h4>
      <Socials socials={member.socials} showHeader={false} />
      {member.blurb != null ? <p className="mb-0 text-white-50">{member.blurb}</p>: null}
      <br />
      <p className="mb-0 text-white-50">
        <b>Roles:</b> {member.roles}
      </p>
      <p className="mb-0 text-white-50">
        {member.voiceOf != null ? <><b>Voice of:</b> {member.voiceOf}, various others </>: null}
      </p>
      <p className="mb-0 text-white-50">
        For full credits, please visit{' '}
        <a href={member.imdb} target="_blank">IMDb
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </p>
    </>
  );

  if (props.flavor === "A") {
    return (
      <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div className="col-lg-6">
          <img className="img-fluid img-bio" src={photo} alt={member.name} />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row gx-0 justify-content-center">
        <div className="col-lg-6">
          <img className="img-fluid img-bio" src={photo} alt={member.name} />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
