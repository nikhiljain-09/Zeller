export function toSnakeCase(str: string) {
  return str
    .split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
}
