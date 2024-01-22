import { WorkedHours } from "@prisma/client";
import dayjs, { Dayjs } from "dayjs";
import * as Yup from "yup";

export type FormValues = typeof initialFormValues;

const getYersterday = () => {
  const yesterday = dayjs().subtract(1, "day");
  return yesterday.set("hour", 0).set("minute", 0).set("second", 0);
};

export const initialFormValues = {
  date: getYersterday() as Dayjs | null,
  hours: "",
};

export const formValidationSchema = Yup.object({
  date: Yup.date().required("Required"),
  hours: Yup.number().required("Required"),
});

export type ChartData = (Pick<WorkedHours, "date"> & {
  hours: number;
})[];
