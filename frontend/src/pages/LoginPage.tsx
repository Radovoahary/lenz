// Permet d'utiliser React Hook Form
import { useForm } from "react-hook-form";

// Permet de connecter Zod avec React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";

// Sert à créer le schéma de validation
import { z } from "zod";

// Notre composant Input
import Input from "../components/ui/Input";

// Notre composant Button
import Button from "../components/ui/Button";


// -----------------------------
// Schéma de validation Zod
// -----------------------------
const loginSchema = z.object({

  // Email obligatoire + format email
  email: z
    .string()
    .email("Adresse email invalide"),

  // Mot de passe d'au moins 6 caractères
  password: z
    .string()
    .min(6, "Minimum 6 caractères"),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginPage() {

  // Initialisation du formulaire
  const {
    register,
    handleSubmit,
    // Contient toutes les erreurs
    formState: { errors }

  } = useForm<LoginForm>({
    // Utilise Zod pour valider le formulaire
    resolver: zodResolver(loginSchema)
  });

  // Fonction exécutée après validation
  function onSubmit(data: LoginForm) {

    console.log(data);

  }

  return (

    <div className="mx-auto mt-20 max-w-md">

      <h1 className="mb-8 text-3xl font-bold">
        Connexion
      </h1>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Champ Email */}
        <div>
          <Input
            type="email"
            placeholder="Adresse email"
            {...register("email")}
          />
          {/* Affiche l'erreur si elle existe */}
          <p className="mt-1 text-sm text-red-500">
            {errors.email?.message}
          </p>
        </div>
        {/* Champ Mot de passe */}
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
      </form>
    </div>
  );
}
export default LoginPage;