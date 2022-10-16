import { BrowserRouter } from "react-router-dom";
import { FooterComponent } from "./components/Footer";
import { Main } from "./components/Main/styles";
import { Header } from "./components/NavBar";
import { AuthProvider, useAuth } from "./contexts/auth";
import Routes from "./routes/index.routes";
import { ToastContainer } from 'react-toastify';
function App() {
  const { loading } = useAuth();
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Main loading={loading}>
          <Header />
          <Routes />
          <FooterComponent />
        </Main>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App;
