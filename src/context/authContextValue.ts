import { createContext } from "react";
import type {
  LoginCredentials,
  RegisterData,
  User,
} from "../types/auth";

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<User>;
  register: (data: RegisterData) => Promise<User>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export default AuthContext;
