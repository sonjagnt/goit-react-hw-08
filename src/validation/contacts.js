import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Number is required"),
});
