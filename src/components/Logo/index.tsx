import { Container } from "./styles";
type ILogoProps = {
  width?: string | number
  height?: string | number
}
export function Logo({ width = '80px', height = '80px' }: ILogoProps) {
  return (
    <Container>
      <img width={width} height={height} src="/foodInLoco.svg" alt="Food In Loco" />
    </Container>
  )
}