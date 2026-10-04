import type { Meta, StoryObj } from "@storybook/react-vite";
import { VMasonry } from "../../../src";
import React, { startTransition, useState, ViewTransition } from "react";
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

const PHOTO_CLASS = "gallery-photo";

const thumbnailStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const Default: StoryObj = {
  name: "Gallery",
  render: () => {
    const [photos] = useState(() => createPhotos(1000));
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
        <VMasonry style={{ height: "100vh" }} lanes={4} gap={4} data={photos}>
          {(photo) => (
            <button
              key={photo.id}
              aria-label={`Open photo ${photo.id}`}
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
                  <img src={photo.src} alt="" style={thumbnailStyle} />
                </ViewTransition>
              ) : (
                <img src={photo.src} alt="" style={thumbnailStyle} />
              )}
            </button>
          )}
        </VMasonry>
        {selected && (
          <ViewTransition>
            <div
              role="dialog"
              aria-label={`Photo ${selected.id}`}
              onClick={(e) => {
                // Close by clicking the backdrop, not the photo
                if (e.target === e.currentTarget) {
                  close();
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
                aria-label="Close"
                onClick={close}
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
              <ViewTransition name={`photo-${selected.id}`} share={PHOTO_CLASS}>
                <img
                  src={selected.src}
                  alt=""
                  width={PHOTO_WIDTH}
                  height={Math.round(PHOTO_WIDTH / selected.ratio)}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </ViewTransition>
            </div>
          </ViewTransition>
        )}
      </>
    );
  },
};
