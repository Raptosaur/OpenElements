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
