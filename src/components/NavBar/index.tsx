import { SearchBar } from '../SearchBar';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Container,
} from './styles';

export const Navbar = () => {
    return (
        <Container>
            <Nav>
                <NavMenu>
                    <NavLink to='/'>
                        Restaurantes
                    </NavLink>
                    |
                    <NavLink to='/events' >
                     Lojas   
                    </NavLink>
                </NavMenu>
                <NavBtn>
                <SearchBar/>
                </NavBtn>
            </Nav>
        </Container>
    );
};
