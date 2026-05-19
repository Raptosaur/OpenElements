import { useMemo, useRef, useEffect } from "preact/hooks";

export const SEWidgetCustomEventList = (widget) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const srcDoc = useMemo(() => {
    let css = widget.variables.css || "";
    console.log(Object.entries(widget.variables.fieldData));
    Object.entries(widget.variables.fieldData).forEach(([key, value]) => {
      css = css.replaceAll(`{{${key}}}`, value);
    });
    return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>${css}</style>
        </head>
        <body style="margin:0;overflow:hidden;">
          ${widget.variables.html}
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
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      style={{ ...widget.css, border: "none", position: "absolute" }}
      title={widget.name}
    />
  );
};
