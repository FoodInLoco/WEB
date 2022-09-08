import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComponent from "../Drawer";
import { GoogleButton } from "../GoogleButton";
import { LoginButton } from "../LoginButton";
import { Logo } from "../Logo";
import { LogoName } from "../LogoName";
import { Search } from "../SearchBar";
import { LogoArea, Nav, NavBtn, NavLink, NavMenu } from "./styles";


export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{
      background: "#fff",
    }}>
      <Toolbar>
        <LogoArea>
          <Logo />
          <LogoName />
        </LogoArea>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Nav>
            <NavMenu>
              <NavLink to='/'>
                Restaurantes
              </NavLink>
              <NavLink to='/events' >
                Lojas
              </NavLink>
            </NavMenu>
            <NavBtn>
              <GoogleButton />
              <LoginButton />
              <Search />
            </NavBtn>
          </Nav>
        )}
      </Toolbar>
    </AppBar>
  );
}