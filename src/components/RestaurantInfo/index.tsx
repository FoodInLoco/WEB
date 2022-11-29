import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Container, IconButton, Skeleton, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useTheme } from '@mui/material/styles';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import { handleAddress } from "../../utils/formatAddress";
import { handlePhone } from "../../utils/formatPhone";
import React from "react";
import { Email, Phone } from "@mui/icons-material";
interface IRestaurantInfo {
  isLoading: boolean;
  restaurant: IRestaurantProps | undefined | null
}

export function RestaurantInfo({ isLoading, restaurant }: IRestaurantInfo) {
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
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  
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
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="icon tabs example">
          <Tab icon={<ContactsIcon />} label="Contatos" {...a11yProps(0)} />
          <Tab icon={<PlaceIcon />} label="Endereço" {...a11yProps(1)} />
          <Tab icon={<AccessTimeIcon />} label="Horário" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Phone /> ({restaurant?.ddd}) {phoneNumber}
          <br/>
          <Email /> {restaurant?.email}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {address}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Dia</TableCell>
                <TableCell>Abertura</TableCell>
                <TableCell>Fechamento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Domingo</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Segunda</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Terça</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quarta</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quinta</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sexta</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sábado</TableCell>
                <TableCell>08:00</TableCell>
                <TableCell>22:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>
      </CardContent>
    </Card>
  </Container>
}