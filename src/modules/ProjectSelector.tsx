import { useState } from "react";
import "./ProjectSelector.css";
import { Stack, Image, Group, Title } from "@mantine/core";
import ProjectList from "./ProjectList";
import { videos } from "../helpers/videos.ts";
import { images } from "../helpers/images.ts";

import { useIsDesktop } from "../theme";

function ProjectSelector() {
  const [videoSrc, setVideoSrc] = useState(videos.loadingvideo);

  const isMobile = !useIsDesktop();

  const tv_breakpoint_width = isMobile ? "90vw" : "40vw";

  const handleVideoChange = (newVideoSrc: string) => {
    setVideoSrc(newVideoSrc);
  };

  return (
    <Stack align={isMobile ? "stretch" : "flex-start"} justify="flex-start">
      <Group justify="flex-start">
        <div>
          <Title order={2} size="h1" className="projectTitle">
            Projects
          </Title>
          <ProjectList
            links={[
              [
                "keyboardwarrior",
                "Keyboard Warrior",
                videos.keyboardwarriorvideo,
              ],
              ["quickcast", "Quickcast", videos.quickcastvideo],
              ["blendify", "Blendify", videos.blendifyvideo],
              ["sussyscript", "SussyScript", videos.sussyscriptvideo],
            ]}
            setVideoSrc={handleVideoChange} // Pass the function to handle image change
          />
        </div>
        <div>
          <Title order={2} size="h1" className="projectTitle">
            Passions
          </Title>
          <ProjectList
            links={[
              ["photography", "Photography", videos.photographyvideo],
              ["nishikigoi", "Nishikigoi", videos.nishikigoivideo],
              ["graphicdesign", "Graphic Design", videos.graphicdesignvideo],
              ["keyboards", "Keyboards", videos.keyboardvideo],
            ]}
            setVideoSrc={handleVideoChange} // Pass the function to handle image change
          />
        </div>
      </Group>
      <div
        style={{
          display: "grid",
          width: tv_breakpoint_width,
          justifyItems: "center",
        }}
      >
        {/* Background */}
        <Image
          src={images.tvbackground}
          fit="contain"
          style={{
            gridArea: "1 / 1",
            width: "100%",
          }}
        />

        {/* Video */}
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

        {/* Foreground */}
        <Image
          src={images.tvmask}
          fit="contain"
          style={{
            gridArea: "1 / 1",
            width: "100%",
            transform: "translate(0px, 0px)",
          }}
        />
      </div>

      {/* <div className="text">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</div> */}
    </Stack>
  );
}

export default ProjectSelector;
