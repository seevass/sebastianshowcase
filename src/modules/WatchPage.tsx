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

// ---- Fake content: edit these freely ----
const RECOMMENDED = [
  {
    color: "var(--main-pink-color)",
    title: "I turned my keyboard into a toaster",
    meta: "seabass · 1.2M views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "10 hours of koi swimming (relaxing)",
    meta: "koi_lover · 340K views",
  },
  {
    color: "var(--main-green-color)",
    title: "Why my code only works on Tuesdays",
    meta: "debugging_dave · 88K views",
  },
  {
    color: "var(--main-hot-pink-color)",
    title: "Rating every font I have ever used",
    meta: "typenerd · 2.1M views",
  },
  {
    color: "var(--main-blue-color)",
    title: "Unboxing a very small box",
    meta: "unboxer99 · 12K views",
  },
  {
    color: "var(--main-pink-color)",
    title: "Gaming chair review (I broke it)",
    meta: "seabass · 560K views",
  },
];

const COMMENTS = [
  {
    user: "keebfan99",
    color: "var(--main-green-color)",
    text: "this is so cool, where can i get those keycaps",
  },
  { user: "xX_koilover_Xx", color: "var(--main-yellow-color)", text: "first!" },
  {
    user: "mom",
    color: "var(--main-pink-color)",
    text: "proud of you sweetie, call me back",
  },
  {
    user: "debugging_dave",
    color: "var(--main-hot-pink-color)",
    text: "who's here in 2026",
  },
];
// -----------------------------------------

function WatchPage() {
  const { active } = useProject();

  const url = `http://www.seabass.tv/${active ? `watch?v=${active.id}` : ""}`;

  return (
    <div className="watch">
      {/* fake browser bar: not clickable */}
      <div className="watch-chrome" aria-hidden="true">
        <IconArrowLeft size={16} />
        <IconArrowRight size={16} />
        <IconRefresh size={16} />
        <div className="watch-url">{url}</div>
      </div>

      {/* fake site header: logo + search, not clickable */}
      <div className="watch-header" aria-hidden="true">
        <div className="watch-logo">
          Sea<span className="watch-logo-block">bass</span>
        </div>
        <div className="watch-search">
          <span>Search</span>
          <IconSearch size={16} />
        </div>
      </div>

      <div className="watch-body">
        <div className="watch-main">
          <TvPlayer />

          <div className="watch-title">
            {active?.name ?? "Select a project"}
          </div>

          <div className="watch-channel">
            <div className="watch-avatar" aria-hidden="true" />
            <span className="watch-channel-name">Sebastian Cruz</span>
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
            <div className="watch-comments-title">
              {COMMENTS.length} Comments
            </div>
            {COMMENTS.map((c) => (
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
          {RECOMMENDED.map((r) => (
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
