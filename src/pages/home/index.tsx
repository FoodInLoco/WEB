import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MainCard } from '../../components/MainCard';
import BackgroundHome from "../../assets/background-home.png"
import { useLayoutEffect, useState } from 'react';
import { getAllRestaurants } from '../../services/restaurants';
import toasts from '../../utils/toasts';
import { RestaurantGrid } from '../../components/RestaurantGrid';
export function Home() {
  const [restaurantList, setRestaurantList] = useState()
  const [loading, setLoading] = useState(false)
  const handleRestaurants = async () => {
    setLoading(true)
    try {
      const restaurants = await getAllRestaurants();
      setRestaurantList(restaurants)
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
    <Box component="main" sx={{ p: 3, flexGrow: 1, backgroundColor: "#F8F5F6" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <MainCard text='Escolha a opção mais perto de você.' />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Box
            sx={{
              p: 0,
              display: 'flex',
              flexDirection: "column",
              height: 710,
              backgroundImage: `url(${BackgroundHome})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              overflow: "hidden",
              overflowX: "scroll",
              flexWrap: "wrap",
              "&::-webkit-scrollbar": {
                width: 20
              },
              "&::-webkit-scrollbar-track": {
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#F16667",
                borderRadius: 1
              }
            }}>
            <RestaurantGrid restaurants={restaurantList} isLoading={loading} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
