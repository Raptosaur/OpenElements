export const cssMapper = (
  css: Record<string, string | number>,
): React.CSSProperties => {
  const result: Record<string, string | number> = {};
  for (const [key, value] of Object.entries(css)) {
    // Convert kebab-case CSS properties to camelCase for React
    const camelKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    result[camelKey] = value;
  }
  return result as React.CSSProperties;
};
