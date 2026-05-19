import { cssMapper } from "../util/cssMapper.ts";

export const LatestSubscriberRenderer = (widget) => {
  // TODO: Add listeners
  return (
    <div style={cssMapper({ ...widget.css, position: "absolute" })}>
      <div style={cssMapper(widget.text.css)}>{widget.text.value}</div>
    </div>
  );
};
