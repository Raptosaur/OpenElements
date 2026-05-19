import { PreactReplace } from "../../util/PreactReplace";
import { cssMapper } from "../../util/cssMapper.ts";

export const ImageAlertRenderer = ({ eventConfig, event, css }) => {
  const messageNodes = PreactReplace(
    eventConfig.text.message,
    event.variables,
    (variable) => (
      <span style={cssMapper(eventConfig.text.css.highlights)}>{variable}</span>
    ),
  );

  return (
    <div style={{ display: "flex", flexDirection: eventConfig.layout }}>
      <img style={cssMapper(css)} src={eventConfig.graphics.src} />
      <span style={cssMapper(eventConfig.text.css)}>{messageNodes}</span>
    </div>
  );
};
