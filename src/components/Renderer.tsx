import { ImageRenderer } from "./ImageRenderer.tsx";
import { SEWidgetAlertBox } from "./SEWidgetAlertBox.tsx";
import { LatestSubscriberRenderer } from "./LatestSubscriberRenderer.tsx";
import { SEWidgetCustomEventList } from "./SEWidgetCustomEventList.tsx";

export const Renderer = ({ config }: { config: object }) => (
  <>
    <div
      style={{
        width: config.settings.width,
        height: config.settings.height,
        overflow: "hidden",
      }}
    >
      {config.widgets.map((widget) => {
        console.log(widget);
        if (!widget.visible) return;
        switch (widget.type) {
          case "se-widget-custom-event-list":
            return <SEWidgetCustomEventList {...widget} />;
          case "subscriber-latest":
            return <LatestSubscriberRenderer {...widget} />;
          case "se-widget-alert-box":
            return <SEWidgetAlertBox {...widget} />;
          case "image":
            return <ImageRenderer {...widget} />;
          default:
            return <DefaultRenderer {...widget} />;
        }
      })}
    </div>
  </>
);

export const DefaultRenderer = (widget) => {
  return (
    <div
      style={{
        ...widget.css,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      {JSON.stringify(widget)}
    </div>
  );
};
