import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRestaurantById } from "../../services/restaurants";
import toasts from "../../utils/toasts";

export function Restaurant() {
  const [loading, setLoading] = useState(false)
  const [restaurant, setRestaurant] = useState<IRestaurantProps | null>()

  const params = useParams();
  const handleRestaurants = async () => {
    setLoading(true)
    try {
      const restaurant = await getRestaurantById(params?.id);
      setRestaurant(restaurant)
    } catch (error: any) {
      toasts.error(error)
    } finally {
      setLoading(false)
    }

  }
  useLayoutEffect(() => {
    handleRestaurants()
  }, [])


  return <>
    <h1>Restaurant Area : {params.id}</h1>
    <h1>Restaurant Name : {restaurant?.companyName}</h1>
    <h1>Restaurant Area : {params.id}</h1>
    <h1>Restaurant Area : {params.id}</h1>
  </>
}