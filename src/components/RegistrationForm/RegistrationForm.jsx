import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Box, TextField } from "@mui/material";
import s from "./RegistrationForm.module.css";
import { Button } from "@mui/material";

function RegistrationForm() {
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
          <Field
            as={TextField}
            required
            label="Email"
            name="email"
            type="email"
            variant="standard"
            autoComplete="on"
          />
          <Field
            as={TextField}
            required
            label="Password"
            name="password"
            type="password"
            variant="standard"
            autoComplete="on"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default RegistrationForm;
