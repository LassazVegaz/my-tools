import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddForm.helper";
import { submitForm } from "./AddForm.actions";
import { toast } from "react-toastify";

const useAddFormUtils = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async () => {
      try {
        await submitForm(form.values);
        form.resetForm();
        toast.success("Worked hours added successfully.");
      } catch (error) {
        toast.error("Adding worked hours failed. Please try again.");
        console.error(error);
      }
    },
  });

  return { form };
};

export default useAddFormUtils;
