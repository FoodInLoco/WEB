import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Home />} />
      </Routes>
    </>
  );
};
