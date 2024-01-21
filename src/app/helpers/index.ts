import { WorkedHours } from "@prisma/client";
import * as Yup from "yup";

export type FormValues = typeof initialFormValues;

export const initialFormValues = {
  date: "",
  hours: "",
};

export const formValidationSchema = Yup.object({
  date: Yup.date().required("Required"),
  hours: Yup.number().required("Required"),
});

export type ChartData = (Pick<WorkedHours, "date"> & {
  hours: number;
})[];
