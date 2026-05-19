import { cssMapper } from "../util/cssMapper.ts";

export const TextRenderer = (widget: object) => {
  return (
    <div style={cssMapper({ ...widget.css, position: "absolute" })}>
      <span style={cssMapper(widget.text.css)}>{widget.text.value}</span>
    </div>
  );
};
