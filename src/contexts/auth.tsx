import { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import api from "../services/api";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface User {
  name: string;
  email: string;
}

type ILoginProps = {
  login: string;
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
      const storagedToken = await token;

      if (storagedToken) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Baerer ${storagedToken}`;
      }

      if (storagedUser) {
        await setUser(storagedUser);
      }
      setLoading(false);
    }
    loadStorageData();
  });

  async function signIn({ login, password }: ILoginProps) {

    try {
      setLoadingSignIn(true)
      const response = await auth.signIn({ login, password });
      api.defaults.headers.common["Authorization"] = `Baerer ${response.data.token}`;
      response.data.user && await setUser(response.data.user);
      await setToken(response.data.token);
    } catch (error: any) {
      throw new Error(error?.message || "Houve um erro :/", { cause: error });
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
