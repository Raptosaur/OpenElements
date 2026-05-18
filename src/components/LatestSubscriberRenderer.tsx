export const LatestSubscriberRenderer = (widget) => {
  // TODO: Add listeners
  return (
    <div style={{ position: "absolute", ...widget.css }}>
      <p style={{ ...widget.text.css.message }}>{widget.text.value}</p>
    </div>
  );
};
