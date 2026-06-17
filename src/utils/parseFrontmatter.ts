export function parseFrontmatter(raw: string) {
  const lines = raw.split("\n");

  // Verificar que empiece con ---
  if (lines[0].trim() !== "---") {
    return { data: {} as Record<string, string>, content: raw };
  }

  // Buscar el cierre del frontmatter
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) {
    return { data: {} as Record<string, string>, content: raw };
  }

  // Parsear los campos
  const data: Record<string, string> = {};
  for (let i = 1; i < endIndex; i++) {
    const colonIndex = lines[i].indexOf(":");
    if (colonIndex !== -1) {
      const key = lines[i].slice(0, colonIndex).trim();
      const value = lines[i]
        .slice(colonIndex + 1)
        .trim()
        .replace(/^"|"$/g, "");
      data[key] = value;
    }
  }

  // El contenido empieza después del segundo ---
  const content = lines
    .slice(endIndex + 1)
    .join("\n")
    .trim();

  return { data, content };
}