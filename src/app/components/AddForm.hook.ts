import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddForm.helper";
import { submitForm } from "./AddForm.actions";

const useAddFormUtils = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async () => {
      try {
        await submitForm(form.values);
        form.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { form };
};

export default useAddFormUtils;
