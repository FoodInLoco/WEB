import { Home } from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Routes from "./routes/index.routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
