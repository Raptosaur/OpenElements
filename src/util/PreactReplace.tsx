import type { VNode } from "preact";

export function PreactReplace(
  input: string,
  variables: Record<string, string | number>,
  replacement: (variable: string | number) => VNode | string,
): (string | VNode)[] {
  const keys = Object.keys(variables);
  if (keys.length === 0) return [input];

  const escapedKeys = keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`({(?:${escapedKeys.join("|")})})`, "g");

  const parts = input.split(regex);

  return parts
    .map((part) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const key = part.slice(1, -1);
        if (key in variables) {
          return replacement(variables[key]);
        }
      }
      return part;
    })
    .filter((part) => part !== "");
}
