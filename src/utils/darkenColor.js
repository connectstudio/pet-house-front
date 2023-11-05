export default function darkenColor(color, factor) {
  const hex = (factor) => Math.round(parseInt(color, 16) * factor).toString(16);
  return `#${hex(1 - factor)}${hex(1 - factor)}${hex(1 - factor)}`;
}
