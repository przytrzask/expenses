export function range(
  n: number,
  start: number = 0,
  step: number = 1
): number[] {
  return Array(n)
    .fill(0)
    .map((_, i) => start + i * step);
}
