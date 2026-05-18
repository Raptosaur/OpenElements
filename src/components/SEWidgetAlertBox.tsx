import { useState } from "preact/hooks";
import { ImageAlertRenderer } from "./alerts/ImageAlertRenderer.tsx";
import { VideoAlertRenderer } from "./alerts/VideoAlertRenderer.tsx";

export const SEWidgetAlertBox = (widget: object) => {
  const [currentEvent, setCurrentEvent] = useState({
    type: "subscriber",
    variables: { name: "strayuru" },
  });
  const [eventQueue, setEventQueue] = useState([]);
  // TODO: Add listeners based on widget.listeners

  const EventRenderer = ({ event, widget }) => {
    const eventConfig = widget.variables[event.type];
    // For some reason eventConfig.enabled is always true, even when we don't actually
    // want it to trigger? *eyeroll*
    if (!widget.listeners[`${event.type}-latest`]) {
      return;
    }
    console.log(event.type, eventConfig);
    const builder = [];
    if (eventConfig.graphics.type === "image") {
      builder.push(
        <ImageAlertRenderer
          eventConfig={eventConfig}
          event={event}
          css={widget.image.css}
        />,
      );
    }
    if (eventConfig.graphics.type === "video") {
      builder.push(
        <VideoAlertRenderer
          eventConfig={eventConfig}
          event={event}
          css={widget.video.css}
        />,
      );
    }
    if (eventConfig.audio?.src) {
      builder.push(
        <audio
          src={eventConfig.audio.src}
          volume={eventConfig.audio.volume}
          autoplay
        />,
      );
    }
    return <>{...builder}</>;
  };

  return (
    <div
      style={{
        ...widget.css,
        position: "absolute",
        overflow: "hidden",
      }}
    >
      {currentEvent && <EventRenderer event={currentEvent} widget={widget} />}
    </div>
  );
};
