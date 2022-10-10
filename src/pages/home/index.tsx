import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MainCard } from '../../components/MainCard';
import { RestaurandCard } from '../../components/RestaurantCard';

export function Home() {
  return (
    <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={4}>
          <MainCard text='Escolha a opção mais perto de você.' />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Box
            sx={{
              display: 'flex',
              gridTemplateColumn: { md: '2fr 2fr' },
              flexDirection: "column",
              height: 700,
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
                borderRadius: 2
              }
            }}          >
            {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60].map((key) => (
              <RestaurandCard name={`Restaurant${key}`} key={key
              } />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
