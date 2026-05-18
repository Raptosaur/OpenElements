import { PreactReplace } from "../../util/PreactReplace";

export const VideoAlertRenderer = ({ eventConfig, event, css }) => {
  const messageNodes = PreactReplace(
    eventConfig.text.message,
    event.variables,
    (variable) => (
      <span style={{ ...eventConfig.text.css.highlights }}>{variable}</span>
    ),
  );

  return (
    <div style={{ display: "flex", flexDirection: eventConfig.layout }}>
      <video
        style={{ ...css, alignSelf: "center" }}
        src={eventConfig.graphics.src}
        volume={eventConfig.graphics.volume}
        autoplay
        loop
      />
      <span style={{ ...eventConfig.text.css }}>{messageNodes}</span>
    </div>
  );
};
