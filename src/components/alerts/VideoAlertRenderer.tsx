import { PreactReplace } from "../../util/PreactReplace";
import { cssMapper } from "../../util/cssMapper.ts";

export const VideoAlertRenderer = ({ eventConfig, event, css }) => {
  const messageNodes = PreactReplace(
    eventConfig.text.message,
    event.variables,
    (variable) => (
      <span style={cssMapper(eventConfig.text.css.highlights)}>{variable}</span>
    ),
  );

  return (
    <div style={{ display: "flex", flexDirection: eventConfig.layout }}>
      <video
        style={cssMapper({ ...css, alignSelf: "center" })}
        src={eventConfig.graphics.src}
        volume={eventConfig.graphics.volume}
        autoplay
        loop
      />
      <span style={{ ...eventConfig.text.css }}>{messageNodes}</span>
    </div>
  );
};
