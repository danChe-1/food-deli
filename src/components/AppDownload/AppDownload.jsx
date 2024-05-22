import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div
      className="app-download"
      id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platforms">
        <img
          src={assets.play_store}
          alt="play market"
        />
        <img
          src={assets.app_store}
          alt="appstore"
        />
      </div>
    </div>
  );
};

export default AppDownload;

