import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
`
export const Content = styled(Box)`
border:none;
border-radius: 20px;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 10%;
  justify-content: space-between;
  align-items: center;
`