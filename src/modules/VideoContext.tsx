import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { videos } from "../helpers/videos";

interface VideoContextValue {
  videoSrc: string;
  setVideoSrc: (src: string) => void;
}

const VideoContext = createContext<VideoContextValue | null>(null);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [videoSrc, setVideoSrc] = useState(videos.loadingvideo);
  return (
    <VideoContext.Provider value={{ videoSrc, setVideoSrc }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const ctx = useContext(VideoContext);
  if (!ctx) throw new Error("useVideo must be used inside <VideoProvider>");
  return ctx;
}
