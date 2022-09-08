import styled from "styled-components";
export const Container = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
padding: 10px 0;
`

export const SearchInput = styled.input`
outline: none;
width:90%;
padding:0 10px;
height: 72px;
font-size: 20px;
background: #F8F5F5;
border: none;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50px;

::placeholder {
    color: #B6B6B6;
 };
 line-height: 23px;
 color: #B6B6C9;
`