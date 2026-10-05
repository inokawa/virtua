import type { Meta, StoryObj } from "@storybook/react-vite";
import { VMasonry } from "../../../src";
import React, {
  startTransition,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  ViewTransition,
} from "react";
import { flushSync } from "react-dom";
import { faker } from "@faker-js/faker";
import { range } from "../common";

export default {
  component: VMasonry,
} as Meta;

type Photo = {
  id: number;
  src: string;
  ratio: number;
};

const PHOTO_WIDTH = 800;
const RATIOS = [3 / 4, 4 / 3, 1, 2 / 3, 3 / 2, 9 / 16, 16 / 9];

const createPhotos = (count: number): Photo[] =>
  range(count, (id) => {
    const ratio = faker.helpers.arrayElement(RATIOS);
    return {
      id,
      ratio,
      src: faker.image.url({
        width: PHOTO_WIDTH,
        height: Math.round(PHOTO_WIDTH / ratio),
      }),
    };
  });

// Lanes for each breakpoint of the window, like the classes of Tailwind CSS
const BREAKPOINTS = [
  ["(min-width: 1536px)", 6],
  ["(min-width: 1280px)", 5],
  ["(min-width: 1024px)", 4],
  ["(min-width: 768px)", 3],
] as const;
const getLanesByMediaQuery = (): number =>
  BREAKPOINTS.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 2;
const subscribeMediaQueries = (onChange: () => void) => {
  const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => {
    lists.forEach((list) => list.removeEventListener("change", onChange));
  };
};

const PHOTO_CLASS = "gallery-photo";

const thumbnailStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const getAlt = (photo: Photo) => `Photo ${photo.id}`;

const Thumbnail = ({ photo }: { photo: Photo }) => (
  <img src={photo.src} alt={getAlt(photo)} style={thumbnailStyle} />
);

const Viewer = ({ photo, onClose }: { photo: Photo; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    // Return the focus to the photo in the grid when closed
    const opener = document.activeElement as HTMLElement | null;
    return () => {
      opener?.focus();
    };
  }, []);
  useEffect(() => {
    // Moved after the transition, as the focus moved while it's running can be lost
    closeRef.current!.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={getAlt(photo)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      onClick={(e) => {
        // Close by clicking the backdrop, not the photo
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <button
        ref={closeRef}
        aria-label="Close"
        onClick={onClose}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 40,
          height: 40,
          border: "none",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
        }}
      >
        ✕
      </button>
      <ViewTransition name={`photo-${photo.id}`} share={PHOTO_CLASS}>
        <img
          src={photo.src}
          alt={getAlt(photo)}
          width={PHOTO_WIDTH}
          height={Math.round(PHOTO_WIDTH / photo.ratio)}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        />
      </ViewTransition>
    </div>
  );
};

export const Default: StoryObj = {
  name: "Gallery",
  render: () => {
    const [photos] = useState(() => createPhotos(1000));
    const lanes = useSyncExternalStore(
      subscribeMediaQueries,
      getLanesByMediaQuery,
    );
    const [selected, setSelected] = useState<Photo | null>(null);
    // Only the photo moving between the grid and the viewer has the name, otherwise every photo in the grid is animated over the page
    const [activeId, setActiveId] = useState<number | null>(null);

    const open = (photo: Photo) => {
      // The name must be set before the transition starts
      flushSync(() => setActiveId(photo.id));
      startTransition(() => setSelected(photo));
    };
    const close = () => startTransition(() => setSelected(null));

    return (
      <>
        {/* The moving photo is placed over the backdrop fading in, which is a later group of the transition */}
        <style>{`::view-transition-group(.${PHOTO_CLASS}) { z-index: 1; }`}</style>
        <VMasonry
          style={{ height: "100vh" }}
          lanes={lanes}
          gap={4}
          data={photos}
        >
          {(photo) => (
            <button
              key={photo.id}
              onClick={() => open(photo)}
              style={{
                display: "block",
                width: "100%",
                aspectRatio: photo.ratio,
                padding: 0,
                border: "none",
                background: "#e5e5e5",
                cursor: "zoom-in",
              }}
            >
              {selected?.id === photo.id ? null : activeId === photo.id ? (
                <ViewTransition name={`photo-${photo.id}`} share={PHOTO_CLASS}>
                  <Thumbnail photo={photo} />
                </ViewTransition>
              ) : (
                <Thumbnail photo={photo} />
              )}
            </button>
          )}
        </VMasonry>
        {selected && (
          <ViewTransition>
            <Viewer photo={selected} onClose={close} />
          </ViewTransition>
        )}
      </>
    );
  },
};
