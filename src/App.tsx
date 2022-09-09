import { BrowserRouter } from "react-router-dom";
import { FooterComponent } from "./components/Footer";
import { Main } from "./components/Main/styles";
import { Header } from "./components/NavBar";
import Routes from "./routes/index.routes";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes />
        <FooterComponent />
      </Main>
    </BrowserRouter>
  );
}

export default App;
