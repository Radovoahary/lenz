import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Input from "../ui/Input";
import Button from "../ui/Button";

/*
    Schéma de validation du formulaire.
*/
const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Minimum 3 caractères"),

    email: z
      .string()
      .email("Adresse email invalide"),

    password: z
      .string()
      .min(6, "Minimum 6 caractères"),

    confirmPassword: z
      .string()
      .min(6, "Minimum 6 caractères"),
  })

  /*
      Vérifie que les deux mots de passe sont identiques.
  */
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type RegisterData = z.infer<typeof registerSchema>;

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  /*
      Plus tard :
      -> appel API
      -> connexion automatique
  */
  function onSubmit(data: RegisterData) {

    console.log(data);

  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >

      <div>

        <Input
          placeholder="Nom d'utilisateur"
          {...register("username")}
        />

        <p className="mt-1 text-sm text-red-500">

          {errors.username?.message}

        </p>

      </div>

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

      <div>

        <Input
          type="password"
          placeholder="Confirmer le mot de passe"
          {...register("confirmPassword")}
        />

        <p className="mt-1 text-sm text-red-500">

          {errors.confirmPassword?.message}

        </p>

      </div>

      <Button type="submit">

        Créer un compte

      </Button>

    </form>

  );

}

export default RegisterForm;