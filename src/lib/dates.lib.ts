/**
 * Convert a date to a number in format `YYYYMMDD`.
 */
export const dateToNumber = (date: Date): number => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return parseInt(`${year}${month}${day}`);
};
