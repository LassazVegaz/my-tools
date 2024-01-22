"use server";
import { ChartData, FormValues } from "../helpers";
import { workedHoursService } from "@/services";

/**
 * If working hours for the given date exist, they will be overwritten.
 */
export const submitForm = async (formValues: FormValues) => {
  if (!formValues.date) throw new Error("Date is required.");

  const date = formValues.date.toDate();
  const hours = parseFloat(formValues.hours);

  if (await workedHoursService.workedHoursExist(date)) {
    await workedHoursService.updateWorkedHours(hours, date);
  } else {
    await workedHoursService.addWorkedHours(hours, date);
  }
};

export const getChartData = async (): Promise<ChartData> => {
  const data = await workedHoursService.getAllWorkedHours();
  return data.map((workedHours) => ({
    date: workedHours.date,
    hours: workedHours.hours.toNumber(),
  }));
};
