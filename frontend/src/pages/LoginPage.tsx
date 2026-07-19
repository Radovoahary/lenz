import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

/*
    La page ne fait qu'assembler les composants.
*/

function LoginPage() {

    return (

        <AuthLayout>

            <h1 className="mb-8 text-center text-3xl font-bold">

                Connexion

            </h1>

            <LoginForm />

        </AuthLayout>

    );

}

export default LoginPage;