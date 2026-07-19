import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import * as authService from "../../services/auth.service";

import Button from "../ui/Button";
import Input from "../ui/Input";


/*
    Règles de validation du formulaire.
*/
const loginSchema = z.object({

    email: z.string().email("Adresse email invalide"),

    password: z.string().min(6, "Minimum 6 caractères"),

});

/*
    Type créé automatiquement à partir du schéma.
*/
type LoginData = z.infer<typeof loginSchema>;

function LoginForm() {

    /*
        useForm gère tout le formulaire :
        - les champs
        - les erreurs
        - le submit
    */
    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm<LoginData>({

        resolver: zodResolver(loginSchema)

    });

    // Permet de changer de page après la connexion
const navigate = useNavigate();

// Donne accès au AuthProvider
const { login } = useAuth();

    /*
|--------------------------------------------------------------------------
| Connexion
|--------------------------------------------------------------------------
| Pour l'instant, si le backend n'existe pas encore,
| cette fonction retournera une erreur.
| C'est normal.
|--------------------------------------------------------------------------
*/
async function onSubmit(data: LoginData) {

  try {

    const response = await authService.login(data);

    // Sauvegarde l'utilisateur dans le contexte
    login(response.token, response.user);

    // Redirection
    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    alert("Impossible de se connecter.");

  }

}

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >

            <div>

                <Input
                    type="email"
                    placeholder="Adresse email"
                    {...register("email")}
                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.email?.message}

                </p>

            </div>

            <div>

                <Input
                    type="password"
                    placeholder="Mot de passe"
                    {...register("password")}
                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.password?.message}

                </p>

            </div>

            <Button type="submit">

                Se connecter

            </Button>

            <div className="text-center text-sm">

              Pas encore de compte ?

                 <Link
                    to="/register"
                    className="ml-1 font-semibold text-blue-600 hover:underline"
                >
                    S'inscrire
                </Link>

</div>

        </form>

    );

}

export default LoginForm;