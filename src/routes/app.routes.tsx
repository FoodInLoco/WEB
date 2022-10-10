import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Restaurant } from "../pages/home/Restaurant";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
};
