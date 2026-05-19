import { cssMapper } from "../util/cssMapper.ts";
export const ImageRenderer = (widget: object) => {
  return (
    <div
      style={cssMapper({
        ...widget.css,
        position: "absolute",
        overflow: "hidden",
      })}
    >
      <img style={cssMapper(widget.image.css)} src={widget.image.src} />
    </div>
  );
};
