import { useState } from "react";
import "./ProjectSelector.css";
import { Stack, Image, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ProjectList from "./ProjectList";
import { videos } from "../helpers/videos.ts";
import { images } from "../helpers/images.ts";

import { theme } from "../theme";

function ProjectSelector() {
  const [videoSrc, setVideoSrc] = useState(videos.loadingvideo);

  const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
  const text_breakpoint_right = isMobile ? "0px" : "12%";
  const text_breakpoint_left = isMobile ? "10px" : "20px";
  const breakpoint_top = isMobile ? "70px" : "50px";
  const navlink_title_breakpoint = isMobile
    ? "clamp(3rem, 7vw, 5rem)"
    : "clamp(3rem, 3vw, 5rem)";

  const tv_breakpoint_width = isMobile ? "90vw" : "40vw";

  const handleVideoChange = (newVideoSrc: string) => {
    setVideoSrc(newVideoSrc);
  };

  return (
    <Stack
      align={isMobile ? "stretch" : "flex-start"}
      justify="flex-start"
      style={{
        paddingRight: text_breakpoint_right,
        paddingLeft: text_breakpoint_left,
        paddingTop: breakpoint_top,
      }}
    >
      <Group justify="flex-start">
        <div>
          <Text
            className="projectTitle"
            style={{ fontSize: navlink_title_breakpoint }}
          >
            Projects
          </Text>
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
            style={{
              columnCount: isMobile ? 1 : 1,
            }}
          />
        </div>
        <div>
          <Text
            className="projectTitle"
            style={{ fontSize: navlink_title_breakpoint }}
          >
            Passions
          </Text>
          <ProjectList
            links={[
              ["photography", "Photography", videos.photographyvideo],
              ["nishikigoi", "Nishikigoi", videos.nishikigoivideo],
              ["graphicdesign", "Graphic Design", videos.graphicdesignvideo],
              ["keyboards", "Keyboards", videos.keyboardvideo],
            ]}
            setVideoSrc={handleVideoChange} // Pass the function to handle image change
            style={{
              columnCount: isMobile ? 1 : 1,
            }}
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

      <div className="text">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</div>
    </Stack>
  );
}

export default ProjectSelector;
