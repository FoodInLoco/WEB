import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Card, CardContent, Skeleton, Table, TableContainer } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



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

export function TabRestaurant({ menus }: { menus: Menu[] | undefined }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <Card sx={{ bgcolor: 'background.paper', width: '100%', minHeight: '93vh', maxHeight: '93vh' }}>
      <CardContent sx={{ minHeight: '62vh' }}>
        {menus ? <>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >{
                menus.map((menu, index) => (
                  <Tab iconPosition="start" icon={menu.photo && <Avatar src={menu.photo} sx={{ width: 30, height: 30 }}/>} label={menu.name} {...a11yProps(index)}/>
                ))
              }
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            {
              menus.map((menu, index) => (
                <TabPanel value={value} index={index} dir={theme.direction}>
                  <Typography variant="h5" gutterBottom component="div">
                    {menu.description}
                  </Typography>
                  <Typography gutterBottom component="div">
                    {menu.happyHour && "Horário do happy hour: " + menu.startAt + " - " + menu.endAt}
                  </Typography>
                  <br />
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Descrição</TableCell>
                        <TableCell align="center">Porção</TableCell>
                        <TableCell align="center">Preço</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {menu.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {item.photo}
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell align="center">{item.quantity}</TableCell>
                          <TableCell align="center">
                            {formatter.format(item.value)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabPanel>
              ))
            }
          </SwipeableViews>
        </> : <div
          style={{
            marginRight: 20,
            marginLeft: 20
          }}>
          <Skeleton animation="wave"
            height={50}
            width="100%"

          />
          <Skeleton animation="wave"
            height={500}
            width="100%"
          />
        </div>}
      </CardContent>
    </Card>
  );
}