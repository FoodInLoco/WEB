import { Container } from "./styles";
type IGoogleButtonProps = {
  width?: string | number
  height?: string | number
}
export function GoogleButton({ width = '80%', height = '80%' }: IGoogleButtonProps) {
  return (
    <Container>
      <img width={width} height={height} src="./src/assets/google.svg" alt="Google login" />
    </Container>
  )
}