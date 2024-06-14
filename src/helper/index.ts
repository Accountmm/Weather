type Unions = number | string;

export function getTime(zone: string): string {
  return new Date().toLocaleString("en-US", {
    timeStyle: "short",
    hourCycle: "h23",
    timeZone: zone,
  });
}
export function getTemp(temp: number): Unions {
  const fixTemp = +temp.toFixed();
  return fixTemp > 0 ? "+" + fixTemp : fixTemp;
}
export function getWeek(dt: number): string {
  const date = new Date(dt * 1000);
  const isToday = new Date().toLocaleDateString() === date.toLocaleDateString()
  if (isToday) {
    return 'Today'
  }
  return date.toLocaleString("en-US", {
    weekday: "long",
  });
}
export function getDay(dt: number): string {
  const date = new Date(dt * 1000);
  return date.toLocaleString("en-US", {
    day: "2-digit",
  });
}
export function getMonth(dt: number): string {
  const date = new Date(dt * 1000);
  return date.toLocaleString("en-US", {
    month: "short",
  });
}

