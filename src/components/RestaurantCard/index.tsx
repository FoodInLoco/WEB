import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardHeader, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { handleAddress } from '../../utils/formatAddress';
import Skeleton from '@mui/material/Skeleton';

export function RestaurandCard({ restaurant, isLoading }: { restaurant: IRestaurantProps, isLoading: boolean }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/restaurant/${restaurant?.id}`);
  }
  const address = handleAddress({
    address: {
      ...restaurant,
    }, type: 'short'
  })

  const handleAvatar = () => {
    if (restaurant && restaurant?.photo) {
      return <Avatar src={restaurant.photo} />
    } else {
      return <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        {restaurant?.companyName[0]}
      </Avatar>
    }
  }
  return (
    <Container sx={{ minWidth: 280, maxWidth: 260, marginBottom: 1, marginLeft: 2, borderRadius: 5 }}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            isLoading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : handleAvatar()}
          action={
            isLoading ? null : <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={isLoading ? <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          /> : restaurant?.companyName}
          subheader={address}
        />
        <CardActionArea onClick={isLoading ? () => null : handleClick}>
          <CardContent>
            {isLoading ?
              <>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </> :
              <Typography variant="body2">
                {restaurant?.tradingName}
                <br />
                {'"teste"'}
              </Typography>}
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
