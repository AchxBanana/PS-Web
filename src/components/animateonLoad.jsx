import React from "react";

export default function AnimationsOnLoad() {
  return (
    <div className="flex justify-center">
      <img
        src="pong.png"
        alt="Pong"
        className="animate-spin h-96"
        style={{
          transform: "rotate(0deg)",
          transition: "transform 1s linear",
        }}
      />
    </div>
  );
}
