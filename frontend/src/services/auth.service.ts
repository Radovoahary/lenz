import api from "./api";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth.types";

/*
|--------------------------------------------------------------------------
| Auth Service
|--------------------------------------------------------------------------
| Toutes les requêtes liées à l'authentification passent ici.
| Ainsi, si l'API change, on modifie uniquement ce fichier.
|--------------------------------------------------------------------------
*/

// Connexion
export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", data);

  return response.data;
}

// Inscription
export async function register(
  data: RegisterRequest
): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/register", data);

  return response.data;
}