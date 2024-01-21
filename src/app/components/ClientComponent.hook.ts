import { useFormik } from "formik";
import { initialFormValues, formValidationSchema } from "../helpers";
import { submitForm } from "./ClientComponent.actions";
import { toast } from "react-toastify";

const useClientComponentUtils = () => {
  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema: formValidationSchema,
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

export default useClientComponentUtils;
