import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

function RegisterPage() {

  return (

    <AuthLayout>

      <h1 className="mb-8 text-center text-3xl font-bold">

        Inscription

      </h1>

      <RegisterForm />

    </AuthLayout>

  );

}

export default RegisterPage;