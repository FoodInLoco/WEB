import styled from "styled-components";
import theme from "../../theme";
import Grid from "@mui/material/Unstable_Grid2";

export const Container = styled(Grid)`
background-color: ${theme.COLORS.PRIMARY};
justify-content:center;
align-items:center;
`
export const TextCard = styled.h1`
margin: 0;
font-family: 'Lexend Deca';
font-style: bold;
font-weight: 800;
font-size: 85px;
`;