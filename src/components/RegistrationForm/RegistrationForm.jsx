import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Box, TextField } from "@mui/material";
import s from "./RegistrationForm.module.css";
import { Button } from "@mui/material";
import * as Yup from "yup";

function RegistrationForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password has to be at least 7 characters long")
      .max(50, "Too long")
      .required("Password is required"),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };
  return (
    <Box sx={{ "& .MuiTextField-root": { m: 1, width: "300px" } }} noValidate>
      <h3 className={s.title}>Registration</h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            as={TextField}
            required
            label="Username"
            name="name"
            variant="standard"
            autoComplete="on"
          />
          <ErrorMessage name="name" component="span" />
          <Field
            as={TextField}
            required
            label="Email"
            name="email"
            type="email"
            variant="standard"
            autoComplete="on"
          />
          <ErrorMessage name="email" component="span" />
          <Field
            as={TextField}
            required
            label="Password"
            name="password"
            type="password"
            variant="standard"
            autoComplete="on"
          />
          <ErrorMessage name="password" component="span" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default RegistrationForm;
