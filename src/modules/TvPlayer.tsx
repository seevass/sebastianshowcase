import { Image } from "@mantine/core";
import { images } from "../helpers/images";
import { loadingVideo } from "../helpers/projects";
import { useProject } from "./ProjectContext";

function TvPlayer() {
  const { active } = useProject();

  return (
    <div style={{ display: "grid", width: "100%", justifyItems: "center" }}>
      {/* layer 0: TV body */}
      <Image
        src={images.tvbackground}
        fit="contain"
        style={{ gridArea: "1 / 1", width: "100%", zIndex: 0 }}
      />

      {/* layer 1: video, sized and offset in percentages so it scales with the TV */}
      <div
        style={{
          gridArea: "1 / 1",
          alignSelf: "center",
          justifySelf: "center",
          width: "90%",
          height: "75%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <video
          src={active?.video ?? loadingVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-5.5%, -3%)",
          }}
        />
      </div>

      {/* layer 2: mask, on top of the video */}
      <Image
        src={images.tvmask}
        fit="contain"
        style={{ gridArea: "1 / 1", width: "100%", zIndex: 2 }}
      />
    </div>
  );
}

export default TvPlayer;
