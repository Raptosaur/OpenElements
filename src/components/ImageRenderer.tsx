export const ImageRenderer = (widget: object) => {
  return (
    <div
      style={{
        ...widget.css,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <img style={{ ...widget.image.css }} src={widget.image.src} />
    </div>
  );
};

const widget = {
  id: 2,
  group: null,
  version: 1,
  type: "image",
  name: null,
  visible: true,
  locked: false,
  listener: false,
  css: {
    "z-index": 2,
    width: "1376.65px",
    height: "775.43px",
    opacity: 1,
    top: "307px",
    left: "328.91px",
  },
  text: {
    type: "text",
    value: null,
    enableShadow: true,
    scrolling: { direction: "left", speed: 6 },
    css: {
      position: "relative",
      "z-index": 1,
      "font-family": "Nunito",
      "font-size": 24,
      color: "#fff",
      "font-weight": "bold",
      "text-shadow": "rgb(0, 0, 0) 1px 1px 1px",
      "text-align": "left",
      "line-height": 1.3,
      scrolling: { direction: "left" },
      message: {
        enableShadow: false,
        "font-family": "Nunito",
        "font-size": 16,
        "line-height": 1.3,
        color: "#fff",
        "text-align": "center",
      },
    },
  },
  image: {
    type: "image",
    css: { "max-width": "100%", width: "100%" },
    src: "https://cdn.streamelements.com/uploads/148511db-8a54-446f-ac04-ff09924e8069.png",
    volume: 0.5,
  },
  video: { type: "video", volume: 0.5, css: { width: 320, height: 240 } },
  audio: { volume: 1 },
  provider: "twitch",
};
