export function getToday(): string {
  return dateToString(new Date(Date.now()));
}

export function dateToString(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}