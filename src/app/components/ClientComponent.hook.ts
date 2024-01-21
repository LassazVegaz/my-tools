import { useFormik } from "formik";
import { initialFormValues, formValidationSchema, ChartData } from "../helpers";
import { getWorkedHours, submitForm } from "./ClientComponent.actions";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const useClientComponentUtils = () => {
  const [workedHours, setWorkedHours] = useState<ChartData>([]);

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

  useEffect(() => {
    let mounted = true;

    getWorkedHours().then((workedHours) => {
      mounted && setWorkedHours(workedHours);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return {
    form,
    workedHours,
  };
};

export default useClientComponentUtils;
