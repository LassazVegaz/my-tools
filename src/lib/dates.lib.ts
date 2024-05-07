/**
 * Convert a date to a number in format `YYYYMMDD`.
 */
export const dateToNumber = (date: Date): number => {
  return parseInt(date.toISOString().slice(0, 10).replaceAll("-", ""));
};
