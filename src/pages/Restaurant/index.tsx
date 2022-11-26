import { AppBar, Avatar, Box, Button, ButtonGroup, Grid, Stack, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRestaurantById } from "../../services/restaurants";
import toasts from "../../utils/toasts";
import { RestaurantInfo } from "../../components/RestaurantInfo";
import { TabRestaurant } from "../../components/NavMenuRestaurant";
import { ReservationModal } from "../../components/ReservationModal";
import { useAuth } from "../../contexts/auth";
export function Restaurant() {
  const [loading, setLoading] = useState(false)
  const [restaurant, setRestaurant] = useState<IRestaurantProps | null>()
  const [open, setOpen] = useState(false)
  const params = useParams();
  const { signed } = useAuth()
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
  const onActionReserv = () => {

    signed ? setOpen(true) : toasts.warning({ message: 'Você precisa estar logado!', status: 500 })
  }
  useLayoutEffect(() => {
    handleRestaurants()
  }, [])

  return (<>
    <ReservationModal open={open} setOpen={setOpen} code={restaurant?.id} />
    <Box component="main" sx={{ p: 3, flexGrow: 1, backgroundColor: "#F8F5F6", margin: 5 }}>
      <Grid container spacing={3} sx={{ minHeight: '80vh' }}>
        <Grid item xs={12} sm={8} md={8}>
          <TabRestaurant menus={restaurant?.menus} />

        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <ButtonGroup
            disableElevation
            variant="contained"
            sx={{ marginLeft: 3, marginBottom: 3 }}
            aria-label="Disabled elevation buttons"
          >
            <Button
              onClick={onActionReserv}
            >Reservar mesa</Button>
          </ButtonGroup>
          <RestaurantInfo isLoading={loading} restaurant={restaurant} />
        </Grid>
      </Grid>
    </Box>
  </>);
}