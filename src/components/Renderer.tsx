import { ImageRenderer } from "./ImageRenderer.tsx";
import { SEWidgetAlertBox } from "./SEWidgetAlertBox.tsx";
import { LatestSubscriberRenderer } from "./LatestSubscriberRenderer.tsx";
import { LatestFollowerRenderer } from "./LatestFollowerRenderer.tsx";
import { SEWidgetCustomEventList } from "./SEWidgetCustomEventList.tsx";
import { TextRenderer } from "./TextRenderer.tsx";
import { useMemo } from "preact/hooks";

const groupings = (widgets) => {
  console.log(widgets);
  return widgets.reduce<Record, { widgets: object[]; config: object }>(
    (groups, widget) => {
      if (widget.type === "se-widget-group") {
        if (!groups[widget.variables.uid]) {
          groups[widget.group] = { widgets: [] };
        }
        groups[widget.variables.uid].config = widget;
        return groups;
      }
      if (!widget.group) {
        groups.ungrouped.widgets.push(widget);
        return groups;
      }
      if (!groups[widget.group]) {
        groups[widget.group] = { widgets: [] };
      }
      groups[widget.group].widgets.push(widget);
      return groups;
    },
    { ungrouped: { widgets: [] } },
  );
};

const GroupRenderer = ({ widgets, config }) => {
  return (
    <div style={{ ...config?.css, position: "absolute" }}>
      <WidgetRenderer widgets={widgets} />
    </div>
  );
};

export const Renderer = ({ config }) => {
  console.log(config);
  const groups = useMemo(() => {
    return groupings(config.widgets);
  }, [config.widgets]);

  console.log(groups);
  return (
    <div
      style={{
        width: config.settings.width,
        height: config.settings.height,
        overflow: "hidden",
      }}
    >
      {Object.values(groups).map((group) => (
        <GroupRenderer config={group.config} widgets={group.widgets} />
      ))}
    </div>
  );
};

export const WidgetRenderer = ({ widgets }: { widgets: object[] }) => {
  return (
    <>
      {widgets.map((widget) => {
        if (!widget.visible) return;
        switch (widget.type) {
          case "follower-latest":
            return <LatestFollowerRenderer {...widget} />;
          case "se-widget-custom-event-list":
            return <SEWidgetCustomEventList {...widget} />;
          case "subscriber-latest":
            return <LatestSubscriberRenderer {...widget} />;
          case "se-widget-alert-box":
            return <SEWidgetAlertBox {...widget} />;
          case "text":
            return <TextRenderer {...widget} />;
          case "image":
            return <ImageRenderer {...widget} />;
          default:
            console.error(
              "unable to render widget, fallback to default renderer",
              widget,
            );
            return <DefaultRenderer {...widget} />;
        }
      })}
    </>
  );
};

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
