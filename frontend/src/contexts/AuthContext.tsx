import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/auth.types";

// Décrit ce que le contexte fournira à toute l'application
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Création du contexte
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  // Utilisateur actuellement connecté
  const [user, setUser] = useState<User | null>(null);

  // Connecte un utilisateur
  function login(user: User) {
    setUser(user);
  }

  // Déconnecte l'utilisateur
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}