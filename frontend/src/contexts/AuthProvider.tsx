import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import type { User } from "../types/auth.types";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {

  // Initialise l'utilisateur depuis le localStorage au démarrage
const [user, setUser] = useState<User | null>(() => {
  const savedUser = localStorage.getItem("user");

  return savedUser ? JSON.parse(savedUser) : null;
});

// Initialise le JWT depuis le localStorage au démarrage
const [token, setToken] = useState<string | null>(() => {
  return localStorage.getItem("token");
});



  // Connexion
  function login(token: string, user: User) {

    setToken(token);

    setUser(user);

    localStorage.setItem("token", token);

    localStorage.setItem("user", JSON.stringify(user));

  }

  // Déconnexion
  function logout() {

    setToken(null);

    setUser(null);

    localStorage.removeItem("token");

    localStorage.removeItem("user");

  }

  return (

    <AuthContext.Provider

      value={{

        user,

        token,

        login,

        logout,

        isAuthenticated: !!user,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}