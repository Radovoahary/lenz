import { createContext } from "react";
import type { User } from "../types/auth.types";

// Décrit les données disponibles dans le contexte
export interface AuthContextType {
  user: User | null;
  token: string | null;

  // Fonction appelée après une connexion réussie
  login: (token: string, user: User) => void;

  // Déconnexion
  logout: () => void;

  // Indique si l'utilisateur est connecté
  isAuthenticated: boolean;
}

// Création du contexte
export const AuthContext = createContext<AuthContextType | null>(null);