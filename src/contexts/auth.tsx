import { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import api from "../services/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import toasts from "../utils/toasts";
import { handleErrors } from "../errors/errorHandler";

interface User {
  firstName: string;
  lastName: string;
  id: number;
  email: string;
}

type ILoginProps = {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  loadingSignIn: boolean;
  signIn(login: ILoginProps): Promise<void>;
  signOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useLocalStorage("@FLAuth:user", null);
  const [token, setToken] = useLocalStorage("@FLAuth:token", null);
  const [loading, setLoading] = useState(true);
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await user;

    
      if (storagedUser) {
        await setUser(storagedUser);
      }
      setLoading(false);
    }
    loadStorageData();
  });

  async function signIn({ email, password }: ILoginProps) {

    try {
      setLoadingSignIn(true)
      const response = await auth.signIn({ email, password });

      response.data.user && await setUser(response.data.user);

      await setToken({ token: response.data.token });
    } catch (error: any) {
      handleErrors(error)
    } finally {
      setLoadingSignIn(false)
    }
  }

  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!token, user, loading, signIn, signOut, loadingSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
