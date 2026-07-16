import api from "./api";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth.types";

// Connexion
export async function login(data: LoginRequest) {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    data
  );

  return response.data;
}

// Inscription
export async function register(data: RegisterRequest) {
  const response = await api.post<AuthResponse>(
    "/auth/register",
    data
  );

  return response.data;
}