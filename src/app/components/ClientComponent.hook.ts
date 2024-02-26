import { useFormik } from "formik";
import { initialFormValues, formValidationSchema, ChartData } from "../helpers";
import { getChartData, submitForm } from "./ClientComponent.actions";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";

const useClientComponentUtils = () => {
  const [chartData, setChartData] = useState<ChartData>([]);
  const [isChartLoading, setIsChartLoading] = useState(true);

  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema: formValidationSchema,
    onSubmit: async () => {
      try {
        await submitForm({
          date: form.values.date!.toDate(),
          hours: form.values.hours,
        });
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
    setIsChartLoading(true);

    // chart can show data for the last 40 days
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 40);

    const data = await getChartData(startDate, endDate);
    setChartData(data);
    setIsChartLoading(false);
  }, []);

  useEffect(() => {
    updateChartData();
  }, [updateChartData]);

  return {
    form,
    chartData,
    isChartLoading,
  };
};

export default useClientComponentUtils;
