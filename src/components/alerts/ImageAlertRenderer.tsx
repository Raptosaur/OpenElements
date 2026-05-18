import { PreactReplace } from "../../util/PreactReplace";

export const ImageAlertRenderer = ({ eventConfig, event, css }) => {
  const messageNodes = PreactReplace(
    eventConfig.text.message,
    event.variables,
    (variable) => (
      <span style={{ ...eventConfig.text.css.highlights }}>{variable}</span>
    ),
  );

  return (
    <div style={{ display: "flex", flexDirection: eventConfig.layout }}>
      <img style={{ ...css }} src={eventConfig.graphics.src} />
      <span style={{ ...eventConfig.text.css }}>{messageNodes}</span>
    </div>
  );
};
