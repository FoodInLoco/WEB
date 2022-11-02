import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Restaurant } from "../pages/Restaurant";
import { SignUp } from "../pages/SignUp";
export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
};
