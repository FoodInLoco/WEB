import { Container } from "./styles";
type ILogoProps = {
  width?: string | number
  height?: string | number
}
export function Logo({ width = '80%', height = '80%' }: ILogoProps) {
  return (
    <Container>
      <img width={width} height={height} src="./src/assets/foodInLoco.svg" alt="Food In Loco" />
    </Container>
  )
}