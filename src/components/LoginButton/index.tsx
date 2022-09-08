import { Container } from "./styles";

type ILoginButtonProps = {
  width?: string | number
  height?: string | number
}
export function LoginButton({ width = '50%', height = '50%' }: ILoginButtonProps) {
  return (
    <Container>
      <img width={width} height={height} src="/login.svg" alt="Google login" />
    </Container>
  )
}