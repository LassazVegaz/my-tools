import { TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";

type FormFieldProps<T> = Omit<TextFieldProps, "name"> & {
  name: keyof T;
  form: FormikProps<T>;
};

const FormField = <T,>({ name, form, ...props }: FormFieldProps<T>) => {
  const hasError = form.touched[name] && Boolean(form.errors[name]);

  return (
    <TextField
      name={name as string}
      value={form.values[name]}
      error={hasError}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      {...props}
    />
  );
};

export default FormField;
