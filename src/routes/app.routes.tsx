import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Home } from "../pages/home";
export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Home />} />
      </Routes>
    </>
  );
};
