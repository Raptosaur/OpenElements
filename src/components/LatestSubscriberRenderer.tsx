export const LatestSubscriberRenderer = (widget) => {
  // TODO: Add listeners
  return (
    <div style={{ position: "absolute", ...widget.css }}>
      <p style={{ ...widget.text.css.message }}>{widget.text.value}</p>
    </div>
  );
};
const s = {
  id: 4,
  group: null,
  version: 1,
  type: "subscriber-latest",
  name: null,
  visible: true,
  locked: false,
  listener: "subscriber-latest",
  css: {
    "z-index": 4,
    width: "392.79px",
    height: "48.18px",
    opacity: 1,
    top: "1031.91px",
    left: "1038.17px",
  },
  text: {
    type: "text",
    value: "{name}",
    enableShadow: true,
    scrolling: { direction: "left", speed: 6 },
    css: {
      position: "relative",
      "z-index": 1,
      "font-family": "Blinker",
      "font-size": 34,
      color: "#fff",
      "font-weight": "normal",
      "text-shadow": "rgb(0, 0, 0) 1px 1px 1px",
      "text-align": "center",
      "line-height": 1.3,
      scrolling: { direction: "left" },
      message: {
        enableShadow: false,
        "font-family": "Nunito",
        "font-size": 16,
        "line-height": 1.3,
        color: "#fff",
        "text-align": "center",
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0,
      },
      "text-transform": "uppercase",
    },
    enableCustomFont: true,
  },
  image: { type: "image", css: { "max-width": "100%" } },
  video: { type: "video", volume: 0.5, css: { width: 320, height: 240 } },
  audio: { volume: 1 },
  provider: "twitch",
};
