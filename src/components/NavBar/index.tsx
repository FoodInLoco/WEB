import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './styles';

export const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about'>
                        ts
                    </NavLink>
                    <NavLink to='/events' >
                        Events
                    </NavLink>
                    <NavLink to='/annual' >
                        Annual Report
                    </NavLink>
                    <NavLink to='/team' >
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' >
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' >
                        Sign Up
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
