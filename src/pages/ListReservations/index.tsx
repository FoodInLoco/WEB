import { FormControl, InputLabel, Input, FormHelperText, OutlinedInput, FilledInput, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutEffect, useState } from "react";
import { CreateRestaurantForm } from "../../components/CreateRestaurantForm";
import { ReservationTable } from "../../components/ReservationTable";
import SignUpForm from "../../components/SignUpForm";
import { useAuth } from "../../contexts/auth";
import { getReservationByUser } from "../../services/restaurants";
import toasts from "../../utils/toasts";

export function ListReservations() {
  const { user } = useAuth()
  const [reservationsList, setReservationsList] = useState([])
  const [loading, setLoading] = useState(false)
  const handleRestaurants = async () => {
    setLoading(true)
    try {
      const restaurants = await getReservationByUser({  userId: user?.id });
      setReservationsList(restaurants)
    } catch (error: any) {
      toasts.error(error)
    } finally {
      setLoading(false)
    }

  }
  useLayoutEffect(() => {
    handleRestaurants()
  }, [])

  return (
    <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
      {loading ?
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} /> :
        <ReservationTable reservationsListData={reservationsList} />}
    </Box>
  )
}