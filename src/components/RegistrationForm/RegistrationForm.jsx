import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col  w-fit px-20 py-8 rounded-xl shadow-xl bg-white gap-4">
        <label className="flex flex-col gap-2">
          <span className="fieldset-label cursor-pointer">Name</span>
          <Field className="input input-warning" type="text" name="name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="fieldset-label cursor-pointer">Email</span>
          <Field className="input input-warning" type="email" name="email" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="fieldset-label cursor-pointer">Password</span>
          <Field
            className="input input-warning"
            type="password"
            name="password"
          />
        </label>
        <div className="flex gap-1">
          <p>Have an account?</p>
          <Link className="link" to="/login">
            Click here!
          </Link>
        </div>
        <button className="btn btn-neutral" type="submit">
          Confirm
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
