"use client";
import { Box, Button, CircularProgress } from "@mui/material";
import FormField from "./FormField";
import { FormikProps } from "formik";
import { FormValues } from "../helpers";

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
  >
    <FormField
      name="date"
      form={props.form}
      size="small"
      type="date"
      disabled={props.form.isSubmitting}
      sx={{ width: 200 }}
    />

    <FormField
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
