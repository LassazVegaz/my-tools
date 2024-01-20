"use client";
import { Box, Button, CircularProgress } from "@mui/material";
import useAddFormUtils from "./AddForm.hook";
import FormField from "./FormField";

const AddForm = () => {
  const utils = useAddFormUtils();

  return (
    <Box
      component="form"
      onSubmit={utils.form.handleSubmit}
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
        form={utils.form}
        size="small"
        type="date"
        disabled={utils.form.isSubmitting}
        sx={{ width: 200 }}
      />

      <FormField
        form={utils.form}
        name="hours"
        size="small"
        disabled={utils.form.isSubmitting}
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
          disabled={utils.form.isSubmitting}
        >
          Add
        </Button>

        <Box
          position="absolute"
          display={utils.form.isSubmitting ? "inline-flex" : "none"}
          alignItems="center"
          height="100%"
          ml={2}
        >
          <CircularProgress size={25} thickness={5} />
        </Box>
      </Box>
    </Box>
  );
};

export default AddForm;
