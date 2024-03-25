import { mobileAppPrototype } from "./styles";

const VideoEmbed = ({ source }) => {
  return (
    <section>
      <div className={mobileAppPrototype}>
        <span></span>
        <iframe
          src={source}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="showreel2"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoEmbed;
