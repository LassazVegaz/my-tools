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
  <form
    onSubmit={props.form.handleSubmit}
    className="bg-[#001d2f] shadow-md flex items-center justify-center h-[20vh] gap-2"
    style={{
      boxShadow: "0px 0px 9.9px 0px #6472FF",
    }}
  >
    <FormDateField
      form={props.form}
      name="date"
      disabled={props.form.isSubmitting}
      maxDate={dayjs()}
      minDate={minDate}
      slotProps={{
        textField: {
          size: "small",
          sx: {
            width: 200,
            "& .MuiOutlinedInput-root": {
              color: "white",
            },
            "& fieldset": {
              borderColor: "rgba(25, 118, 210, 0.5)",
            },
          },
        },
        inputAdornment: {
          sx: {
            "& svg": {
              color: "#1976d2",
            },
          },
        },
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
        "& .MuiOutlinedInput-root": {
          color: "white",
        },
        "& fieldset": {
          borderColor: "rgba(25, 118, 210, 0.5)",
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
  </form>
);

export default AddForm;
