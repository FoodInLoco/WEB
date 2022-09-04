import { GoogleButton } from '../GoogleButton';
import { LoginButton } from '../LoginButton';
import { Logo } from '../Logo';
import { LogoName } from '../LogoName';
import { Search } from '../SearchBar';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    Container,
    LogoArea,
} from './styles';

export const Navbar = () => {
    return (
        <Container>
            <Nav>
                <LogoArea>
                    <Logo />
                    <LogoName />
                </LogoArea>
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
        </Container>
    );
};
