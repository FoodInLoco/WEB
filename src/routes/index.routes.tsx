import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { AppRoutes } from "./app.routes";

const Routes = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Carregando... </div>;
  }

  return <AppRoutes />;
};

export default Routes;
