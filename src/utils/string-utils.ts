export namespace StringUtils {
  export function formatNumberShort(n: number): string {
    if (n < 1000) return n.toString();
    if (n < 1_000_000) return (n / 1000).toFixed(2).replace(/\.00$/, "") + "K";
    if (n < 1_000_000_000)
      return (n / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
    return (n / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + "B";
  }
}
