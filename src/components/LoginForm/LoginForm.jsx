import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col  w-fit px-20 py-8 rounded-xl shadow-xl bg-white gap-4">
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
            <p>Don`t have an account?</p>
            <Link className="link" to="/register">
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

export default LoginForm;
