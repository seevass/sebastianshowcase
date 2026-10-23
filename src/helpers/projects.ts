import { videos } from "./videos";

export interface Project {
  id: string;
  name: string;
  tags: string[];
  video: string;
  description: string;
  url: string;
}

const BASE_PATH = "/sebastianshowcase/";

export const projectItems: Project[] = [
  {
    id: "keyboardwarrior",
    name: "Keyboard Warrior",
    tags: ["game", "unity"], // TODO
    video: videos.keyboardwarriorvideo,
    description: "keyboardwarrior",
    url: `${BASE_PATH}#keyboardwarrior`,
  },
  {
    id: "quickcast",
    name: "Quickcast",
    tags: ["frontend", "ux/ui"], // TODO
    video: videos.quickcastvideo,
    description: "quickcast",
    url: `${BASE_PATH}#quickcast`,
  },
  {
    id: "blendify",
    name: "Blendify",
    tags: ["frontend", "ux/ui"], // TODO
    video: videos.blendifyvideo,
    description: "blendify",
    url: `${BASE_PATH}#blendify`,
  },
  {
    id: "sussyscript",
    name: "SussyScript",
    tags: ["language", "tooling"], // TODO
    video: videos.sussyscriptvideo,
    description: "sussyscript",
    url: `${BASE_PATH}#sussyscript`,
  },
];

export const passionItems: Project[] = [
  {
    id: "photography",
    name: "Photography",
    tags: ["photo"], // TODO
    video: videos.photographyvideo,
    description: "photography",
    url: `${BASE_PATH}#photography`,
  },
  {
    id: "nishikigoi",
    name: "Nishikigoi",
    tags: ["koi"], // TODO
    video: videos.nishikigoivideo,
    description: "nishikigoi",
    url: `${BASE_PATH}#nishikigoi`,
  },
  {
    id: "graphicdesign",
    name: "Graphic Design",
    tags: ["design"], // TODO
    video: videos.graphicdesignvideo,
    description: "graphicdesign",
    url: `${BASE_PATH}#graphicdesign`,
  },
  {
    id: "keyboards",
    name: "Keyboards",
    tags: ["hardware"], // TODO
    video: videos.keyboardvideo,
    description: "keyboards",
    url: `${BASE_PATH}#keyboards`,
  },
];

// Everything in one list, so the context can look a project up by id
export const allProjects: Project[] = [...projectItems, ...passionItems];

export const loadingVideo = videos.loadingvideo;

export function openProject(p: Project) {
  window.location.href = p.url;
}
