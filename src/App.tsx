import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
		"cooperators-logo.svg",
    "cooperators-logo_black.svg",
    "cooperators-symbol-logo.svg",
    "cgl-app-icon-black.svg",
    "cooperators-logo_white.svg",
    "auto.svg",
    "home.svg",
    "community.svg",
		"cumis-logo.png",
		"sovgen-logo.png",
    "onbase_8725_logo_1630320184_7i1ay.svg",
    "onbase-round-logo.png",
		"onespan-logo.png",
    "quadient-inspire.svg",
    "ServiceNow.svg",
		"guidewire-logo.svg",
		"microstrategy-logo.svg",
		"salesforce-logo.png",
    "azure-synapse-logo.svg",
    "placeholder.jpg",
    "placeholder.jpg",
  ];

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  return (
    <div className="main">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            draggable={false}
            className="miro-draggable draggable-item"
            key={index}
          />
        );
      })}
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
