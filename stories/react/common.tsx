import React, { CSSProperties } from "react";

export const range = <T,>(n: number, cb: (i: number) => T) =>
  Array.from({ length: n }).map((_, i) => cb(i));

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const Spinner = ({
  style,
}: {
  style?: CSSProperties;
}) => {
  return (
    <>
      <div
        style={{
          ...style,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
        }}
      >
        <span className="loader" />
      </div>
      <style>
        {`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`}
      </style>
    </>
  );
};
