import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
`

export const NavLink = styled(Link)`
font-family: 'Lexend Deca';
margin: 0 10%;
color: #808080;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 25px;
display: flex;
text-align: center;
cursor: pointer;
text-decoration: none;
&.active {
	color: #000000;

}
&:hover {
	color: #6f6f70;
}
`;
