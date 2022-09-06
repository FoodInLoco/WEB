import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import RestaurantCard from "../../components/RestaurantCard";
import { MainCard } from "../../components/MainCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
      <MainCard text="Escolha aopção mais perto de você."/>
        <Grid xs={12} sm={6} md={8} >
          <Grid container columns={{ xs: 4, sm: 2, md: 4 }}>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
