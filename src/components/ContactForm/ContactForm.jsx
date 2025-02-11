import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    usernumber: "",
  };
  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  const validationContact = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short name!")
      .max(50, "Too long name!")
      .required("This is requiered field"),
    usernumber: Yup.string()
      .min(3, "Too short phone number!")
      .max(50, "Too long phone number!")
      .required("This is requiered field"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationContact}
    >
      <Form className={s.form}>
        <label className={s.labelWrap}>
          <span className={s.label}>Name</span>
          <Field type="text" name="username" className={s.input} />
          <ErrorMessage name="username" component="span" className={s.error} />
        </label>

        <label className={s.labelWrap}>
          <span className={s.label}>Phone number</span>
          <Field type="text" name="usernumber" className={s.input} />
          <ErrorMessage
            name="usernumber"
            component="span"
            className={s.error}
          />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onAdd({
  //     id: nanoid(),
  //     name: event.target.elements.username.value,
  //     number: event.target.elements.number.value,
  //   });
  //   event.target.reset();
  // };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       <span>Name</span>
  //       <input type="text" name="username" />
  //     </label>
  //     <label>
  //       <span>Phone</span>
  //       <input type="text" name="number" />
  //     </label>
  //     <button type="submit">Add contact</button>
  //   </form>
  // );
};

export default ContactForm;
