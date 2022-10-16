
import styled from 'styled-components';

export const Main = styled.div<{ loading: boolean }>`
flex-direction: column;
height:100%;
width:100%;
background-color:${(props) => (props.loading ? '#00000033' : '#EDEDDE')};
`;
