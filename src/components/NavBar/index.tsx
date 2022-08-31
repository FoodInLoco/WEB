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
                <Bars />

                <NavMenu>
                    <NavLink to='/'>
                        home
                    </NavLink>
                    <NavLink to='/events' >
                        Events
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </Container>
    );
};
