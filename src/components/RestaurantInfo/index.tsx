import { Avatar, Card, CardActionArea, CardContent, CardHeader, Container, IconButton, Skeleton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { handleAddress } from "../../utils/formatAddress";
import { handlePhone } from "../../utils/formatPhone";
interface IRestaurantInfo {
  isLoading: boolean;
  restaurant: IRestaurantProps | undefined | null
}

export function RestaurantInfo({ isLoading, restaurant }: IRestaurantInfo) {
  console.log("🚀 ~ file: index.tsx ~ line 11 ~ RestaurantInfo ~ restaurant", restaurant)
  const address = restaurant ? handleAddress({
    address: {
      ...restaurant,
    }, type: 'long'
  }) : "Localização não fornecida"
  
  const phoneNumber = restaurant ? handlePhone(restaurant?.phoneNumber) : "email não fornecido"
  const handleAvatar = () => {
    if (restaurant && restaurant?.photo) {
      return <Avatar src={restaurant.photo} sx={{ width: 80, height: 80 }} />
    } else {
      return <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        {restaurant?.companyName[0]}
      </Avatar>
    }
  }
  return <Container sx={{ borderRadius: 5, minHeight: '60vh' }}>
    <Card variant="outlined">
      <CardHeader
        avatar={
          isLoading ? (
            <Skeleton animation="wave" variant="circular" width={80} height={80} />
          ) : handleAvatar()
        }
        title={isLoading ? <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        /> : <h2>{restaurant?.companyName}</h2>
        }
        subheader={isLoading ? <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        /> : restaurant?.tradingName
        }
      />
      <CardContent sx={{ minHeight: '62vh' }}>
        {isLoading ?
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </> :
          <Typography variant="h6">
            Contato:
            <br />
            ({restaurant?.ddd}) {phoneNumber} - {restaurant?.email}
          </Typography>}
        {isLoading ?
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </> :
          <Typography variant="h6">
            Endereço:
            <br />
            {address}
          </Typography>}

        {/* {isLoading ?
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </> :
          <Typography variant="h6">
            Horário de funcionamento:
            <br />
            ({restaurant?.ddd}) {restaurant?.phoneNumber} - {restaurant?.email}
          </Typography>} */}
      </CardContent>
    </Card>
  </Container>
}