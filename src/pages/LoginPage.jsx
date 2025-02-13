import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center  gap-4 py-20">
      <h2 className="text-5xl font-bold">Login now!</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
