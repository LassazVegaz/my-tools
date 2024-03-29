"use client";
import { Box, Button, CircularProgress } from "@mui/material";
import { FormDateField, FormTextField } from "./FormField";
import { FormikProps } from "formik";
import { FormValues } from "../helpers";
import dayjs from "dayjs";

const minDate = dayjs(
  process.env.NEXT_PUBLIC_MIN_DATE,
  process.env.NEXT_PUBLIC_DATE_FORMAT
);

type AddFormProps = {
  form: FormikProps<FormValues>;
};

const AddForm = (props: AddFormProps) => (
  <Box
    component="form"
    onSubmit={props.form.handleSubmit}
    bgcolor="#EAECFF"
    boxShadow="0px 0px 9.9px 0px #6472FF"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="20vh"
    gap={2}
    sx={{
      ["@media (prefers-color-scheme: dark)"]: {
        bgcolor: "#001d2f",
      },
    }}
  >
    <FormDateField
      form={props.form}
      name="date"
      disabled={props.form.isSubmitting}
      maxDate={dayjs()}
      minDate={minDate}
      slotProps={{
        textField: { size: "small", sx: { width: 200 } },
      }}
    />

    <FormTextField
      form={props.form}
      name="hours"
      size="small"
      disabled={props.form.isSubmitting}
      sx={{
        width: 130,
        "& input": {
          textAlign: "center",
        },
      }}
    />

    {/* Add button and its spinner */}
    <Box position="relative">
      <Button
        variant="outlined"
        type="submit"
        disabled={props.form.isSubmitting}
      >
        Add
      </Button>

      <Box
        position="absolute"
        display={props.form.isSubmitting ? "inline-flex" : "none"}
        alignItems="center"
        height="100%"
        ml={2}
      >
        <CircularProgress size={25} thickness={5} />
      </Box>
    </Box>
  </Box>
);

export default AddForm;
