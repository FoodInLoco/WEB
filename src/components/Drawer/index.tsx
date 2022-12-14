import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { Logo } from "../Logo";
import { Container, NavLink } from "./styles";
import { LogoName } from "../LogoName";

import MenuIcon from '@mui/icons-material/Menu';
import { GoogleButton } from "../GoogleButton";
import { LoginButton } from "../LoginButton";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Container >
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <LogoName />
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/">Home</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/about">Sobre nós</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/contact">Contatos</NavLink>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to="/about">Faq</NavLink>
            </ListItemText>
          </ListItem>
          <Divider light />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <GoogleButton />
              <LoginButton width='70%' height='70%' />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Logo />
    </Container>
  );
}
export default DrawerComponent;
