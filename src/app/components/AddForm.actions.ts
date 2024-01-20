"use server";
import { FormValues } from "./AddForm.helper";
import { workedHoursService } from "@/services";

export const submitForm = async (formValues: FormValues) => {
  const hours = parseFloat(formValues.hours);
  const date = new Date(formValues.date);
  await workedHoursService.addWorkedHours(hours, date);
};
