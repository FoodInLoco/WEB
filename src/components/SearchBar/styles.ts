import styled from "styled-components";

export const Container = styled.div`
 position:relative;
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
 padding: 0 10px;
 outline: none;
 height: 42px;
 width: 210px;
 background: #F8F5F5;
 mix-blend-mode: normal;
 border: 1px solid rgba(0, 0, 0, 0.14);
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 border-radius: 50px;    
 font-style: normal;
 font-weight: 600;
 font-size: 12px;
font-family: 'Lexend Deca';

 ::placeholder {
    color: #B6B6B6;
 };
 line-height: 23px;
 color: #B6B6C9;
`