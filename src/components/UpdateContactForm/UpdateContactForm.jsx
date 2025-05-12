import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { validationSchema } from "../../validation/contacts.js";
import { updContact } from "../../redux/contacts/operations.js";
import { Button } from "@mui/material";

export const UpdateContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const contactId = contact.id;
    const data = values;

    dispatch(updContact({ data, contactId }));
    onClose();
  };

  return (
    <Formik
      initialValues={{
        name: contact.name,
        number: contact.number,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor="number">
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <Button
          type="submit"
          variant="contained"
          style={{ fontSize: "12px", width: "fit-content" }}
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
