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
import Search from "../Search";
import { LogoArea, Nav, NavBtn, NavLink, NavMenu } from "./styles";
import { useAuth } from "../../contexts/auth";
import { ExitButton } from "../ExitButton";
import { ProfileModal } from "../ProfileModal";


export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { signed } = useAuth()
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
              {signed &&
                <NavLink to='/reservations' >
                  Minhas reservas
                </NavLink>
              }
            </NavMenu>
            <NavBtn>
              {signed ? <>
                <ProfileModal /> 
                <ExitButton />
              </> : <LoginButton />}
              <Search showDirectionIcon={false} placeholder="Encontrar restaurantes" />
            </NavBtn>
          </Nav>
        )}
      </Toolbar>
    </AppBar>
  );
}