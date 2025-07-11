export function toSnakeCase(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, "_");
}
