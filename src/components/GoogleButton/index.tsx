import { Alert } from "@mui/material";
import { Container } from "./styles";
type IGoogleButtonProps = {
  width?: string | number
  height?: string | number
}
export function GoogleButton({ width = '90%', height = '90%' }: IGoogleButtonProps) {
  const notify = () => <Alert severity="error">This is an error alert — check it out!</Alert>;
  return (
    <Container onClick={notify}>
      <img width={width} height={height} src="/google.svg" alt="Google login" />
    </Container >
  )
}