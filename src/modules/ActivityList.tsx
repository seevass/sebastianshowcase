import { openProject } from "../helpers/projects";
import type { Project } from "../helpers/projects";
import { useProject } from "./ProjectContext";
import { Space } from "@mantine/core";
import "./ActivityList.css";

interface ActivityListProps {
  address: string; // the text shown in the address bar
  items: Project[]; // the rows
}

function ActivityList({ address, items }: ActivityListProps) {
  const { selectedId, setSelectedId } = useProject();

  return (
    <div className="explorer">
      <div className="explorer-toolbar" />

      <div className="explorer-address">
        <span>Address</span>
        <span className="explorer-address-path">{address}</span>
      </div>

      <div className="explorer-row explorer-header">
        <span>Name</span>
        <span>Type</span>
      </div>

      <div className="explorer-list" role="listbox">
        {items.map((p) => (
          <div
            key={p.id}
            role="option"
            aria-selected={p.id === selectedId}
            tabIndex={0}
            className={`explorer-row explorer-item${p.id === selectedId ? " is-selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); // don't let this count as a click on the window
              setSelectedId(p.id);
            }}
            onDoubleClick={() => openProject(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter") openProject(p);
              if (e.key === " ") {
                e.preventDefault();
                setSelectedId(p.id);
              }
            }}
          >
            <span>{p.name}</span>
            <span>{p.tags.join(", ")}</span>
          </div>
        ))}
      </div>
      <Space h="sm" />
    </div>
  );
}

export default ActivityList;
