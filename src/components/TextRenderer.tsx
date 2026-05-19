export const TextRenderer = (widget: object) => {
  return (
    <div style={{ ...widget.css, position: "absolute" }}>
      <span style={widget.text.css}>{widget.text.value}</span>
    </div>
  );
};
