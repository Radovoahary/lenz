import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

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

    /*
        Cette fonction sera remplacée plus tard
        par un appel au backend.
    */
    function onSubmit(data: LoginData) {

        console.log(data);

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