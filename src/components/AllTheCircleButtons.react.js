import Socials from "./Socials.react.js";
import Support from "./Support.react.js";
import Platforms from "./Platforms.react.js";

function AllTheCircleButtons() {
    return (
        <div className="contact-section-container bg-black">
            <Platforms />
            <Socials />
            <Support />
        </div>
    );
}

export default AllTheCircleButtons;
