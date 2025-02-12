import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/auth/operations";

const RegistrationPage = () => {
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
    <div className="bg-amber-50 flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-5xl font-bold">Register now!</h2>
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
    </div>
  );
};

export default RegistrationPage;
