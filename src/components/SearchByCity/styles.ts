import styled from "styled-components";

export const Container = styled.div`
display: grid;
place-items: center;
`

export const IconInput = styled.div`
   height: 1.5rem;
  width: 1.5rem;
  background-color: red;
  padding: 4px;
  box-sizing:border-box;
  top:50%;
  left:2px;
  transform: translateY(-50%);

 `
export const SearchInput = styled.input`
outline: none;
width:90%;
margin:10px;
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