"use client";
import { Box, Button } from "@mui/material";
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
        sx={{ width: 200 }}
      />

      <FormField
        form={utils.form}
        name="hours"
        size="small"
        sx={{
          width: 130,
          "& input": {
            textAlign: "center",
          },
        }}
      />

      <Button variant="outlined" type="submit">
        Add
      </Button>
    </Box>
  );
};

export default AddForm;
