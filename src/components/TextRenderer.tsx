export const TextRenderer = (widget: object) => {
  return (
    <div style={{ ...widget.css, position: "absolute" }}>
      <span style={widget.text.css}>{widget.text.value}</span>
    </div>
  );
};

const widget = {
  id: 4,
  group: "fd54da9b-d0d08000-f33d4802",
  version: 1,
  type: "text",
  name: null,
  visible: true,
  locked: false,
  listener: false,
  css: {
    "z-index": 5,
    width: "auto",
    height: "auto",
    opacity: 1,
    top: "788.26px",
    left: "341.12px",
  },
  text: {
    type: "text",
    value: "Latest Sub",
    enableShadow: true,
    scrolling: {
      direction: "left",
      speed: 6,
    },
    css: {
      position: "relative",
      "z-index": 1,
      "font-family": "Nunito",
      "font-size": 17,
      color: "rgb(0, 0, 0)",
      "font-weight": "500",
      "text-shadow": "",
      "text-align": "left",
      "line-height": 1.3,
      scrolling: {
        direction: "left",
      },
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
    },
  },
  image: {
    type: "image",
    css: {
      "max-width": "100%",
    },
  },
  video: {
    type: "video",
    volume: 0.5,
    css: {
      width: 320,
      height: 240,
    },
  },
  audio: {
    volume: 1,
  },
  provider: "twitch",
};
