import { cssMapper } from "../util/cssMapper.ts";

export const LatestFollowerRenderer = (widget) => {
  //TODO: Add listeners
  return (
    <div style={cssMapper({ ...widget.css, position: "absolute" })}>
      <div style={cssMapper(widget.text.css)}>{widget.text.value}</div>
    </div>
  );
};

const widget = {
  id: 6,
  group: null,
  version: 1,
  type: "follower-latest",
  name: null,
  visible: true,
  locked: false,
  listener: "follower-latest",
  css: {
    "z-index": 7,
    width: "671.01px",
    height: "35.18px",
    opacity: 1,
    top: "12px",
    left: "1233px",
  },
  text: {
    type: "text",
    value: "Latest Follower: {name}",
    enableShadow: true,
    scrolling: { direction: "left", speed: 6 },
    css: {
      position: "relative",
      "z-index": 1,
      "font-family": "Arial",
      "font-size": 23,
      color: "#fff",
      "font-weight": "normal",
      "text-shadow": "rgb(0, 0, 0) 1px 1px 1px",
      "text-align": "right",
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
    enableCustomFont: false,
  },
  image: { type: "image", css: { "max-width": "100%" } },
  video: { type: "video", volume: 0.5, css: { width: 320, height: 240 } },
  audio: { volume: 1 },
  provider: "twitch",
};
