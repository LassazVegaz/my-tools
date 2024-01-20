import * as Yup from "yup";

export type FormValues = typeof initialValues;

export const initialValues = {
  date: "",
  hours: "",
};

export const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  hours: Yup.number().required("Required"),
});
