import GridContainer from "../layout/GridContainer";
import Image from "next/image";
import mobileAppPrototypeImage from "../../../public/mobile-app-prototype.png";
import { mobileAppPrototype } from "./styles";

const MobileAppPrototype = ({ videoSource }) => {
  return (
    <section>
      <div className={mobileAppPrototype}>
        <video
          loop
          autoPlay={true}
          preload="metadata"
          playsInline={true}
          src={videoSource}
          muted={true}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></video>
      </div>
    </section>
  );
};

export default MobileAppPrototype;
