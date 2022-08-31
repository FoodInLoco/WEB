import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main/styles";
import { Navbar } from "./components/NavBar";
import Routes from "./routes/index.routes";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Navbar />
        <Routes />
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

export default App;
