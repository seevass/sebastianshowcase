import {
  IconArrowLeft,
  IconArrowRight,
  IconRefresh,
  IconSearch,
} from "@tabler/icons-react";
import { openProject } from "../helpers/projects";
import TvPlayer from "./TvPlayer";
import { useProject } from "./ProjectContext";
import "./WatchPage.css";
import RedactedText from "./RedactedText";
import { Text } from "@mantine/core";
import { images } from "../helpers/images";
import { useMemo, useState } from "react";
import {
  COMMENTS,
  RECOMMENDED,
  randomSubset,
  shuffle,
} from "../helpers/fakeContent";

function WatchPage() {
  const { active } = useProject();
  const comments = useMemo(
    () => (active ? randomSubset(COMMENTS, 1) : []),
    [active?.id],
  );
  const related = useMemo(() => shuffle(RECOMMENDED), [active?.id]);

  const url = active
    ? `http://www.seabass.tv/watch?v=${active.id}`
    : "http://www.seabass.tv/";

  return (
    <div className="watch">
      <div className="watch-chrome" aria-hidden="true">
        <IconArrowLeft size={16} />
        <IconArrowRight size={16} />
        <IconRefresh size={16} />
        <div className="watch-url">{url}</div>
      </div>

      {/* fake site header: logo + search, not clickable */}
      <div className="watch-header" aria-hidden="true">
        <div className="watch-logo">
          <Text fz="xl">
            <RedactedText from={20} to={100} speed={150} weight={700}>
              Sea
            </RedactedText>
            <span className="watch-logo-block">
              <RedactedText from={20} to={100} speed={150} weight={700}>
                Bass
              </RedactedText>
            </span>
          </Text>
        </div>
        <div className="watch-search">
          <span>Search</span>
          <IconSearch size={16} />
        </div>
      </div>

      <div className="watch-body">
        <div className="watch-main">
          <div className="watch-player">
            <TvPlayer />
          </div>

          <Text className="watch-title" fz="lg" fw={700} ff="Franklin Gothic">
            {active?.name ?? "Select-A-Project!"}
          </Text>

          <div className="watch-channel">
            <img
              className="watch-avatar"
              src={images.profilePic}
              alt="Profile"
            />
            <Text fw={700} ff="Franklin Gothic">
              Sebastian Cruz
            </Text>
            <button
              className="watch-open"
              disabled={!active}
              onClick={() => active && openProject(active)}
            >
              Open project
            </button>
          </div>

          <div className="watch-description">
            <div>
              {active?.description ??
                "Click a project in the explorer to watch it here."}
            </div>
            {active && (
              <div className="watch-tags">Tags: {active.tags.join(" ")}</div>
            )}
          </div>

          <div className="watch-comments" aria-hidden="true">
            <Text
              className="watch-comments-title"
              fw={700}
              ff="Franklin Gothic"
              fz="lg"
            >
              {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
            </Text>
            {comments.map((c) => (
              <div key={c.user} className="watch-comment">
                <div
                  className="watch-avatar watch-avatar-sm"
                  style={{ background: c.color }}
                />
                <div>
                  <span className="watch-comment-user">{c.user}</span>
                  <div>{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* fake recommended column: only shows when the window is wide enough */}
        <aside className="watch-related" aria-hidden="true">
          {related.map((r) => (
            <div key={r.title} className="watch-rec">
              <div
                className="watch-rec-thumb"
                style={{ background: r.color }}
              />
              <div className="watch-rec-text">
                <div className="watch-rec-title">{r.title}</div>
                <div className="watch-rec-meta">{r.meta}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default WatchPage;
