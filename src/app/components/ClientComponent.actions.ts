"use server";
import { ChartData, FormValues } from "../helpers";
import { workedHoursService } from "@/services";

type SubmitFormParams = Omit<FormValues, "date"> & { date: Date };

/**
 * If working hours for the given date exist, they will be overwritten.
 */
export const submitForm = async (formValues: SubmitFormParams) => {
  if (!formValues.date) throw new Error("Date is required.");
  const hours = parseFloat(formValues.hours);

  if (await workedHoursService.workedHoursExist(formValues.date)) {
    await workedHoursService.updateWorkedHours(hours, formValues.date);
  } else {
    await workedHoursService.addWorkedHours(hours, formValues.date);
  }
};

export const getChartData = async (): Promise<ChartData> => {
  const data = await workedHoursService.getAllWorkedHours();
  return data.map((workedHours) => ({
    date: workedHours.date,
    hours: workedHours.hours.toNumber(),
  }));
};
