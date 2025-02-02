import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

function LoginForm() {
  const validationSchema = Yup.object().shape({
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
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <Box
      sx={{ "& .MuiTextField-root": { m: 1, width: "300px" } }}
      noValidate
      autoComplete="off"
    >
      <h3 className={s.title}>Log in</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            as={TextField}
            label="Email"
            type="email"
            name="email"
            variant="standard"
            autoComplete="on"
          />
          <ErrorMessage name="email" component="span" />

          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            variant="standard"
            autoComplete="on"
          />
          <ErrorMessage name="password" component="span" />
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default LoginForm;
