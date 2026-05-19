export const LatestSubscriberRenderer = (widget) => {
  // TODO: Add listeners
  return (
    <div style={{ ...widget.css, position: "absolute" }}>
      <p style={{ ...widget.text.css.message }}>{widget.text.value}</p>
    </div>
  );
};
