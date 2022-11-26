import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Skeleton } from '@mui/material';




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

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
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
                <Tab label={menu.name} {...a11yProps(index)} />
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
                {menu.photo && <Avatar src={menu.photo} sx={{ width: 60, height: 60 }} />}
                {menu.items.map((menu, index) => (
                  <>
                    <span>Prato: </span>
                    <span>{menu.name}</span>
                    <br />
                  </>
                ))}
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
    </Box>
  );
}