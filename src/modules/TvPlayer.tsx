import { Image } from "@mantine/core";
import { images } from "../helpers/images";
import { useVideo } from "./VideoContext";

function TvPlayer() {
  const { videoSrc } = useVideo();

  return (
    <div style={{ display: "grid", width: "100%", justifyItems: "center" }}>
      <Image
        src={images.tvbackground}
        fit="contain"
        style={{ gridArea: "1 / 1", width: "100%" }}
      />

      <div
        style={{
          gridArea: "1 / 1",
          alignSelf: "center",
          justifySelf: "center",
          width: "90%",
          height: "75%",
          overflow: "hidden",
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            transform: "translate(-30px, -10px)",
          }}
        />
      </div>

      <Image
        src={images.tvmask}
        fit="contain"
        style={{ gridArea: "1 / 1", width: "100%" }}
      />
    </div>
  );
}

export default TvPlayer;
