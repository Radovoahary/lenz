import Button from "../components/ui/Button";
import { useAuth } from "../hooks/useAuth";

function DashboardPage() {

  // Récupère l'utilisateur connecté
  const { user, logout } = useAuth();

  return (

    <div className="mx-auto mt-10 max-w-4xl">

      <h1 className="mb-4 text-4xl font-bold">

        Dashboard

      </h1>

      <p className="mb-6">

        Bienvenue

        <span className="font-semibold">

          {" "}
          {user?.username}

        </span>

      </p>

      <Button onClick={logout}>

        Déconnexion

      </Button>

    </div>

  );

}

export default DashboardPage;