import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 ">
      <h2 className="text-5xl font-bold">Register now!</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
