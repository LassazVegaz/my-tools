"use server";
import { WorkedHours } from "@prisma/client";
import { FormValues } from "../helpers";
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

/**
 * Get worked hours ordered by date. You can filter data between two dates.
 * `startDate` and `endDate` are inclusive.
 */
export const getChartData = async (
  startDate?: Date,
  endDate?: Date
): Promise<WorkedHours[]> => {
  return workedHoursService.getWorkedHours(startDate, endDate);
};
