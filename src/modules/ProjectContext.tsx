import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { allProjects } from "../helpers/projects";
import type { Project } from "../helpers/projects";

interface ProjectContextValue {
  active: Project | null; // what the preview shows
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const ProjectContext = createContext<ProjectContextValue | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Preload every video once so selecting is instant
  useEffect(() => {
    allProjects.forEach((p) => {
      const v = document.createElement("video");
      v.src = p.video;
    });
  }, []);

  const active = allProjects.find((p) => p.id === selectedId) ?? null;

  return (
    <ProjectContext.Provider value={{ active, selectedId, setSelectedId }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used inside <ProjectProvider>");
  return ctx;
}
