import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Number is required"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        // id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s["contact-form"]}>
        <label htmlFor="name" className={s.label}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor="number" className={s.label}>
          Number
          <Field type="tel" name="number" className={s.input} />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
