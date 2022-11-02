import { AppBar, Box, Grid, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRestaurantById } from "../../services/restaurants";
import toasts from "../../utils/toasts";
import { RestaurantInfo } from "../../components/RestaurantInfo";
import { BarMenuRestaurant } from "../../components/NavMenuRestaurant";

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

  return (
    <Box component="main" sx={{ p: 3, flexGrow: 1, backgroundColor: "#F8F5F6", margin: 5 }}>
      <Grid container spacing={3} sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} sm={8} md={8}>
          <BarMenuRestaurant />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <RestaurantInfo isLoading={loading} restaurant={restaurant} />
        </Grid>
      </Grid>
    </Box>
  );
}