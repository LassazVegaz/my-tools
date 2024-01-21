import { useFormik } from "formik";
import { initialFormValues, formValidationSchema, ChartData } from "../helpers";
import { getChartData, submitForm } from "./ClientComponent.actions";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";

const useClientComponentUtils = () => {
  const [chartData, setChartData] = useState<ChartData>([]);

  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema: formValidationSchema,
    onSubmit: async () => {
      try {
        await submitForm(form.values);
        form.resetForm();
        toast.success("Worked hours added successfully.");

        updateChartData();
      } catch (error) {
        toast.error("Adding worked hours failed. Please try again.");
        console.error(error);
      }
    },
  });

  const updateChartData = useCallback(async () => {
    const data = await getChartData();
    setChartData(data);
  }, []);

  useEffect(() => {
    updateChartData();
  }, [updateChartData]);

  return {
    form,
    chartData,
  };
};

export default useClientComponentUtils;
