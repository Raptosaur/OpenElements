import { cssMapper } from "../util/cssMapper.ts";

import { useMemo, useRef, useEffect } from "preact/hooks";

export const SEWidgetCustomEventList = (widget) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const srcDoc = useMemo(() => {
    let css = widget.variables.css || "";
    let html = widget.variables.html || "";

    Object.entries(widget.variables.fieldData).forEach(([key, value]) => {
      css = css.replaceAll(`{{${key}}}`, value);
      html = html.replaceAll(`{{${key}}}`, value);
    });

    return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>${css}</style>
        </head>
        <body style="margin:0;overflow:hidden;">
          ${html}
          <script>${widget.variables.js}<\/script>
        </body>
      </html>`;
  }, [widget.variables.html, widget.variables.css, widget.variables.js]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const dispatch = () => {
      setTimeout(() => {
        iframe.contentWindow?.dispatchEvent(
          new CustomEvent("onWidgetLoad", {
            detail: {
              fieldData: widget.variables.fieldData,
            },
          }),
        );
      }, 100);
    };

    iframe.addEventListener("load", dispatch);
    return () => iframe.removeEventListener("load", dispatch);
  }, [widget.variables.fieldData]);

  return (
    <div
      style={cssMapper({
        ...widget.css,
        border: "none",
        position: "absolute",
        overflow: "hidden",
      })}
    >
      <iframe
        ref={iframeRef}
        srcDoc={srcDoc}
        style={cssMapper({
          border: "none",
        })}
        title={widget.name}
      />
    </div>
  );
};
