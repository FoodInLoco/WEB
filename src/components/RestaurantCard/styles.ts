import styled from "styled-components";
import Card from '@mui/material/Card';

export const Container = styled(Card)`
background: #F8F5F5;
margin:10px;
&:hover {
  cursor: pointer;
  transition: transform .2s ease-out;
    transform: scale(1.1);
  }
`