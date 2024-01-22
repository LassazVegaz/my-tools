import { TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  DatePickerProps,
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

type FormFieldProps<T> = Omit<TextFieldProps, "name"> & {
  name: keyof T;
  form: FormikProps<T>;
};

export const FormTextField = <T,>({
  name,
  form,
  ...props
}: FormFieldProps<T>) => (
  <TextField
    name={name as string}
    value={form.values[name]}
    error={form.touched[name] && Boolean(form.errors[name])}
    onChange={form.handleChange}
    onBlur={form.handleBlur}
    {...props}
  />
);

type FormDateFieldProps<T> = Omit<DatePickerProps<Dayjs>, "name"> & {
  name: keyof T;
  form: FormikProps<T>;
};

export const FormDateField = <T,>({
  name,
  form,
  slotProps: { textField, ...slotProps } = {},
  ...props
}: FormDateFieldProps<T>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      name={name as string}
      value={form.values[name] as Dayjs}
      onChange={(date) => form.setFieldValue(name as string, date)}
      slotProps={{
        textField: {
          onBlur: form.handleBlur,
          error: form.touched[name] && Boolean(form.errors[name]),
          ...textField,
        },
        ...slotProps,
      }}
      {...props}
    />
  </LocalizationProvider>
);
