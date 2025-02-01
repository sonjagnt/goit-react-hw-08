import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Box, Button, TextField } from "@mui/material";

function LoginForm() {
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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            label="Email"
            type="email"
            name="email"
            variant="standard"
            autoComplete="on"
          />
          <Field
            as={TextField}
            label="Password"
            type="password"
            name="password"
            variant="standard"
            autoComplete="on"
          />
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default LoginForm;
