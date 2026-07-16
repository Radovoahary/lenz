import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();

  // Si l'utilisateur n'est pas connecté, on le redirige
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;