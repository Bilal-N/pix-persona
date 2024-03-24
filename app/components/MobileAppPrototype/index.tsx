import GridContainer from "../layout/GridContainer";
import Image from "next/image";
import mobileAppPrototypeImage from "../../../public/mobile-app-prototype.png";
import { mobileAppPrototype } from "./styles";

const MobileAppPrototype = ({ videoSource1, videoSource2 }) => {
  return (
    <section>
      <div className={mobileAppPrototype}>
        <video
          loop
          autoPlay={true}
          preload="metadata"
          playsInline={true}
          muted={true}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <source src={videoSource1} type="video/webm" />
          <source src={videoSource2} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MobileAppPrototype;
