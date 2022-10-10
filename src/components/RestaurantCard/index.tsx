import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import { deepOrange, red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

type IRestaurantProps = {
  name: string
}
export function RestaurandCard({ name }: IRestaurantProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/restaurant?name=${name}`);
  }
  return (
    <Container sx={{ minWidth: 260, maxWidth: 260, marginBottom: 1, marginLeft: 2 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Titulo"
          subheader="Localização"
        />
        <CardContent>
          <Typography variant="body2">
            Descrição
            <br />
            {'"teste"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} size="small">Conhecer restaurante</Button>
        </CardActions>

      </Card>
    </Container>
  );
}
