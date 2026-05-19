import { useState } from "preact/hooks";
import { Renderer } from "./components/Renderer.tsx";
import config from "./assets/streamelements-export-strayuru-2026-05-15/overlays/Basic Overlay.json";

export function App() {
  return (
    <>
      <Renderer config={config} />
    </>
  );
}
