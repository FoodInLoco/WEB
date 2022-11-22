import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { CreateRestaurantPage } from "../pages/CreateRestaurant";
import { Home } from "../pages/Home";
import { Restaurant } from "../pages/Restaurant";
import { SignUp } from "../pages/SignUp";
export const AppRoutes = () => {
  const { loading, signed } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/signUp" element={<SignUp />} />
        {signed &&
          <>
            <Route path="/reservations" element={<SignUp />} />
            <Route path="/restaurant-register" element={<CreateRestaurantPage />} />
          </>
        }
      </Routes>
    </>
  );
};
