"use server";
import { ChartData, FormValues } from "../helpers";
import { workedHoursService } from "@/services";

/**
 * If working hours for the given date exist, they will be overwritten.
 */
export const submitForm = async (formValues: FormValues) => {
  const date = new Date(formValues.date);
  const hours = parseFloat(formValues.hours);

  if (await workedHoursService.workedHoursExist(date)) {
    await workedHoursService.updateWorkedHours(hours, date);
  } else {
    await workedHoursService.addWorkedHours(hours, date);
  }
};

/**
 * Get worked hours to display in the chart
 */
export const getWorkedHours = async (): Promise<ChartData> => {
  const data = await workedHoursService.getAllWorkedHours();
  return data.map((workedHours) => ({
    date: workedHours.date,
    hours: workedHours.hours.toNumber(),
  }));
};
