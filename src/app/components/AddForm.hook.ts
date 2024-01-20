import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  date: "",
  hours: "",
};

const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  hours: Yup.number().required("Required"),
});

const AddFormUtils = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { form };
};

export default AddFormUtils;
